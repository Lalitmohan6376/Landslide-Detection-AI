from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from tensorflow.keras.models import load_model
import pandas as pd
import joblib
import os
import numpy as np
import cv2

app = Flask(__name__)
CORS(app)

text_model = joblib.load("models/text_model.pkl")
image_model = load_model("models/landslide.keras")


@app.route("/")
def home():
    return "Landslide AI Backend is Running"


@app.route("/api/status")
def status():
    return jsonify({
        "text_model": "Loaded",
        "image_model": "Loaded"
    })


@app.route("/api/predict/image", methods=["POST"])
def predict_image():
    if "image" not in request.files:
        return jsonify({"error": "Please upload an image."}), 400

    file = request.files["image"]

    if not file.filename:
        return jsonify({"error": "No image selected."}), 400

    try:
        image_bytes = np.frombuffer(file.read(), np.uint8)
        original_image = cv2.imdecode(image_bytes, cv2.IMREAD_COLOR)

        if original_image is None:
            return jsonify({"error": "Invalid image."}), 400

        # Image ko model ke input size mein convert karo
        image = cv2.cvtColor(original_image, cv2.COLOR_BGR2RGB)
        image = cv2.resize(image, (128, 128))
        image = image.astype(np.float32) / 255.0
        image = np.expand_dims(image, axis=0)

        # Model se segmentation mask predict karo
        prediction = image_model.predict(image, verbose=0)
        mask = prediction[0]

        if mask.ndim == 3:
            mask = mask[:, :, 0]

        if mask.shape != (128, 128):
            return jsonify({"error": "Invalid mask shape."}), 500

        mask = (mask >= 0.5).astype(np.uint8)

        # Mask ko original image ke size mein lao
        height, width = original_image.shape[:2]
        mask = cv2.resize(
            mask, (width, height),
            interpolation=cv2.INTER_NEAREST
        )

        # Detected area ko red color se highlight karo
        result_image = original_image.copy()
        result_image[mask == 1] = [0, 0, 255]

        # Mask image save karo
        os.makedirs("generated_masks", exist_ok=True)
        cv2.imwrite("generated_masks/mask.png", result_image)

        return jsonify({
            "prediction": (
                "Landslide Detected"
                if np.any(mask)
                else "No Landslide Detected"
            ),
            "mask_url": "http://127.0.0.1:5000/api/predict/mask"
        }), 200

    except Exception:
        app.logger.exception("Prediction failed")
        return jsonify({"error": "Image prediction failed."}), 500


@app.route("/api/predict/mask")
def get_mask():
    return send_from_directory("generated_masks", "mask.png")



#Text Route
@app.route("/api/predict/text", methods=["POST"])
def predict_text():
    data = request.json

    features = pd.DataFrame([{
        "country": data["country"],
        "type": data["type"],
        "trigger": data["trigger"],
        "location": data["location"],
        "precip": float(data["precip"]),
        "temp": float(data["temp"]),
        "air": float(data["air"]),
        "humidity": float(data["humidity"]),
        "wind": float(data["wind"]),
        "slope": float(data["slope"]),
        "year": int(data["year"]),
        "month": int(data["month"])
    }])

    prediction = text_model.predict(features)

    return jsonify({"prediction": str(prediction[0])})


if __name__ == "__main__":
    app.run(debug=True)