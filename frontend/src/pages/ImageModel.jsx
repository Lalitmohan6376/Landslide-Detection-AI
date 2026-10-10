
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ImageModel.css";

function ImageModel() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleImage(event) {
    const file = event.target.files[0];

    setResult(null);
    setError("");

    if (!file) return;

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setError("Please select a PNG or JPG image.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10 MB.");
      event.target.value = "";
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function removeImage() {
    setImage(null);
    setPreview("");
    setResult(null);
    setError("");

    const input = document.getElementById("landslide-image");
    if (input) input.value = "";
  }

  async function analyzeImage() {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        "http://127.0.0.1:5000/api/predict/image",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image prediction failed.");
      }

      if (
        data.prediction !== "Landslide Detected" &&
        data.prediction !== "No Landslide Detected"
      ) {
        throw new Error("The server returned an unexpected prediction.");
      }

      if (!data.mask_url) {
        throw new Error("The server did not return the segmentation mask.");
      }

      setResult(data);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to the backend. Make sure Flask is running."
          : err.message || "Something went wrong while analyzing the image."
      );
    } finally {
      setLoading(false);
    }
  }

  const maskUrl = result?.mask_url
    ? `${result.mask_url}${result.mask_url.includes("?") ? "&" : "?"}t=${Date.now()}`
    : "";

  return (
    <div className="image-model-page">
      <nav className="navbar">
        <Link to="/" className="logo">Landslide AI</Link>

        <div className="nav-links">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/image-model">Image Model</Link>
          <Link to="/text-model">Text Model</Link>
        </div>
      </nav>

      <main className="image-model-container">
        <header className="image-model-header">
          <span className="image-model-tag">AI-POWERED DETECTION</span>
          <h1>Landslide Image <span>Prediction</span></h1>
          <p>
            Upload a terrain image to analyze it using your
            landslide detection deep learning model.
          </p>
        </header>

        <section className="image-model-card">
          <label
            htmlFor="landslide-image"
            className={`image-upload-area ${preview ? "has-image" : ""}`}
          >
            {preview ? (
              <img
                src={preview}
                alt="Uploaded terrain"
                className="image-preview"
              />
            ) : (
              <>
                <div className="image-upload-icon">↑</div>
                <h3>Upload Your Image</h3>
                <p>Click here to select an image from your device</p>
                <span>PNG, JPG or JPEG · Max 10 MB</span>
              </>
            )}
          </label>

          <input
            id="landslide-image"
            className="image-file-input"
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleImage}
            disabled={loading}
          />

          {image && (
            <div className="image-file-info">
              <div className="image-file-details">
                <h4>{image.name}</h4>
                <p>{(image.size / 1024).toFixed(1)} KB</p>
              </div>

              <button
                type="button"
                className="image-remove-btn"
                onClick={removeImage}
                disabled={loading}
              >
                Remove
              </button>
            </div>
          )}

          <button
            type="button"
            className="image-predict-btn"
            onClick={analyzeImage}
            disabled={loading || !image}
          >
            {loading ? "Analyzing Image..." : "Analyze Image"}
          </button>

          {loading && (
            <div className="image-loading" role="status">
              <div className="image-loading-track">
                <div className="image-loading-bar" />
              </div>
              <p>Analyzing image with the AI model...</p>
            </div>
          )}

          {error && (
            <div className="image-result image-result-error" role="alert">
              <h3>Prediction Failed</h3>
              <p>{error}</p>
            </div>
          )}

          {result && (
            <section className="image-result-section" aria-live="polite">
              <div
                className={`image-result ${
                  result.prediction === "Landslide Detected"
                    ? "image-result-danger"
                    : "image-result-safe"
                }`}
              >
                <h3>Prediction Result</h3>
                <p className="image-result-label">{result.prediction}</p>
              </div>

              <div className="mask-section">
                <h3>Segmentation Mask</h3>
                <p>
                  Red-highlighted areas show where the model predicts
                  landslide-affected regions.
                </p>

                <img
                  src={maskUrl}
                  alt="Segmentation mask showing predicted landslide areas in red"
                  className="mask-preview"
                />
              </div>
            </section>
          )}
        </section>

        <div className="image-model-note">
          <span>ⓘ</span>
          <p>
            The model analyzes the uploaded image after backend preprocessing
            to 128 × 128 pixels.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Landslide AI. Built for a safer future.</p>
      </footer>
    </div>
  );
}

export default ImageModel;
