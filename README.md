# 🌋 Landslide Detection AI

### 🤖 AI-Powered Landslide Detection and Prediction

An AI-based project that uses **Deep Learning, Machine Learning, and Image Segmentation** to analyze landslide images and environmental data.

🌍 **Project Goal:** To support landslide detection and risk assessment through AI-based image analysis and data-driven predictions.

---

## 📑 Table of Contents

1. 🌍 [About the Project](#-about-the-project)
2. 🚨 [Real-World Problem and Solution](#-real-world-problem-and-solution)
3. ✨ [Key Features](#-key-features)
4. 📂 [Datasets Overview](#-datasets-overview)
5. 🔍 [Tabular Dataset Features](#-tabular-dataset-features)
6. 🌳 [Machine Learning Model](#-machine-learning-model)
7. 🖼️ [Deep Learning Image Model](#️-deep-learning-image-model)
8. 🛠️ [Technology Stack](#️-technology-stack)
9. 🔄 [System Architecture and Workflow](#-system-architecture-and-workflow)
10. 📁 [Project Folder Structure](#-project-folder-structure)
11. ⚙️ [Installation and Setup](#️-installation-and-setup)
12. 🚀 [How to Use](#-how-to-use)
13. 🎯 [Applications, Limitations, and Future Scope](#-applications-limitations-and-future-scope)

---

## 🌍 About the Project

**Landslide Detection AI** is a web-based application that combines Machine Learning and Deep Learning to analyze two types of data.

### 🖼️ 1. Image-Based Landslide Detection

- Uses **TensorFlow and Keras** to run a Deep Learning model.
- Accepts terrain images uploaded by the user.
- Processes the image before making a prediction.
- Uses image segmentation to identify pixels classified as landslide areas.
- Displays the prediction result and segmentation mask.

### 📊 2. Tabular Data-Based Prediction

- Uses the **Random Forest algorithm** from Scikit-learn.
- Works with environmental, geographical, weather, and landslide-related data.
- Uses numerical and categorical input features according to the model's training setup.
- Generates a prediction based on the input data and the trained model.

### 🌐 3. Web Application

- **Frontend:** React, HTML, and CSS.
- **Backend:** Flask and Python.
- **Machine Learning:** Scikit-learn and Random Forest.
- **Deep Learning:** TensorFlow and Keras.

The frontend allows users to provide input and view results, while the Flask backend connects the web application to the trained models.

---

## 🚨 Real-World Problem and Solution

### ❗ The Problem

Landslides can cause serious damage to people, buildings, roads, farms, and the natural environment.

Some common challenges include:

- 🌧️ **Heavy Rainfall:** Rain can increase soil moisture and reduce slope stability.
- ⛰️ **Steep Slopes:** Unstable slopes can increase the risk of landslides.
- 🌍 **Environmental Changes:** Changes in land and environmental conditions may increase landslide risk.
- 🏘️ **Human Safety:** Landslides can threaten people living near hills, mountains, and unstable slopes.
- 🚧 **Infrastructure Damage:** Roads, houses, bridges, and other structures may be damaged.
- ⏳ **Early Risk Assessment:** Understanding possible risks before an event can help people and authorities plan better.

### 💡 How This Project Helps

| Project Component | How It Helps |
|---|---|
| 🖼️ Image Model | Analyzes an uploaded terrain image and predicts landslide-related regions. |
| 🎭 Image Segmentation | Highlights pixels classified by the model as landslide areas. |
| 📊 Tabular ML Model | Uses available geographical, environmental, and weather-related features to make predictions. |
| 🌐 Web Interface | Makes the models accessible through a user-friendly application. |
| ⚙️ Flask Backend | Receives user inputs, processes requests, and returns model results. |

### 🎯 Main Objective

- Support the analysis of terrain images.
- Explore relationships between environmental conditions and landslide events.
- Make AI-based prediction tools easier to access.
- Provide visual results that are easier to understand.

> ⚠️ **Important:** This project is an AI-based analysis tool. Its predictions are not guaranteed to be correct and must not be treated as official warnings or as a replacement for expert assessment or emergency services.

---

## ✨ Key Features

### 🖼️ Image Model

- Upload a terrain image from your device.
- Preview the selected image before analysis.
- Send the image to the Flask backend.
- Process the image using the trained Deep Learning model.
- Display the prediction as **Landslide Detected** or **No Landslide Detected**, based on the model output.
- View the segmentation mask returned by the backend.

### 📊 Tabular Prediction Model

- Enter the required feature values through the web interface.
- Use the trained Random Forest model to generate a prediction.
- View the prediction returned by the backend.
- Analyze data using the features supported by the model.

### 🎨 User Interface

- React-based frontend.
- Separate Image Model and Text Model pages.
- Custom CSS styling.
- Responsive page layout.
- Prediction result and error messages.

### 🔗 Backend Integration

- Flask API endpoints for model predictions.
- Image upload handling.
- Input preprocessing before prediction.
- JSON responses for frontend communication.

---

## 📂 Datasets Overview

This project uses two different datasets for two different prediction tasks.

### 📊 A. Tabular Dataset

The tabular dataset contains information about landslide events, locations, environmental conditions, weather, and event details.

It includes the following 19 columns:

```text
date, lat, lon, country, fatalities, injuries,
type, trigger, location, precip, temp, air,
humidity, wind, slope, label, severity, year, month
```

#### 🔍 Main Data Categories

| Category | Features |
|---|---|
| 📅 Date and Time | `date`, `year`, `month` |
| 🌍 Location | `lat`, `lon`, `country`, `location` |
| 🌦️ Environmental and Weather Data | `precip`, `temp`, `air`, `humidity`, `wind`, `slope` |
| ⛰️ Event Information | `type`, `trigger`, `severity` |
| 👥 Impact Information | `fatalities`, `injuries` |
| 🎯 Label | `label` |

The exact target column and the features used by Random Forest depend on the model's training code.

### 🖼️ B. Image Segmentation Dataset

The image dataset contains terrain images and their corresponding segmentation masks.

The dataset is divided into three parts:

- 🏋️ **Train:** Used to train the model.
- 🧪 **Validation:** Used to evaluate the model during training and help select model settings.
- 🧾 **Test:** Used for final evaluation on data not used for training.

Each split contains images and masks.

#### 🎭 What Are Segmentation Masks?

- **Image:** The original terrain or land image.
- **Mask:** The corresponding image that identifies the target pixels or regions.
- **Purpose:** The model learns to predict the target regions from the input image.

Images and masks must match correctly during training. Their dimensions, pixel values, and label format must also match the model's requirements.

#### 📌 Dataset Notes

- The image model uses image data and segmentation masks.
- The tabular model uses structured data.
- These datasets support separate prediction workflows.
- Dataset size, source, license, and exact preprocessing details should be documented when confirmed.

---

## 🔍 Tabular Dataset Features

This section explains all 19 columns in the tabular dataset.

| No. | Feature | Description |
|---:|---|---|
| 1 | `date` | The recorded date of the landslide event. It may be used to create time-based features. |
| 2 | `lat` | Latitude of the recorded location. It helps identify the geographical position. |
| 3 | `lon` | Longitude of the recorded location. It works with latitude to identify the location. |
| 4 | `country` | The country where the event was recorded. |
| 5 | `fatalities` | The recorded number of deaths related to the event. |
| 6 | `injuries` | The recorded number of people injured in the event. |
| 7 | `type` | The recorded type of landslide or related event. |
| 8 | `trigger` | The recorded trigger or cause associated with the event. |
| 9 | `location` | The recorded location or place name associated with the event. |
| 10 | `precip` | A precipitation-related measurement, such as rainfall, depending on the dataset definition. |
| 11 | `temp` | A temperature-related measurement. |
| 12 | `air` | An air-related measurement. Its exact meaning and unit must be confirmed from the dataset documentation. |
| 13 | `humidity` | A humidity-related measurement. |
| 14 | `wind` | A wind-related measurement. |
| 15 | `slope` | A slope-related measurement that may describe the steepness of the terrain. |
| 16 | `label` | A label associated with the record. Its exact meaning depends on the dataset and training code. |
| 17 | `severity` | The recorded severity of the event. The possible values and meaning depend on the dataset. |
| 18 | `year` | The year associated with the recorded event. |
| 19 | `month` | The month associated with the recorded event. |

### 🧠 How These Features Can Help

- 🌍 **Geographical Features:** Latitude, longitude, country, and location describe where events occur.
- 🌦️ **Weather Features:** Precipitation, temperature, humidity, and wind describe weather-related conditions.
- ⛰️ **Terrain Feature:** Slope can provide information about the shape and steepness of the land.
- 📅 **Time Features:** Date, year, and month can help identify time-related patterns.
- 🎯 **Target Feature:** The target is the value the model is trained to predict.

### ⚠️ Important Feature Selection

Not every column should automatically be used as a prediction input.

- `label` may be the target if that is how the model was trained.
- `fatalities` and `injuries` may describe the impact after an event rather than conditions available before it.
- `severity`, `type`, and `trigger` may contain information that is not available when predicting a future event.
- Columns derived from the target or recorded after the event may cause **data leakage**.

The final input features must match the features used during model training. The dataset's column names alone do not confirm which features the trained model uses.

---

## 🌳 Machine Learning Model

### 🤖 Algorithm: Random Forest

The tabular prediction component uses the **Random Forest algorithm** from Scikit-learn.

Random Forest combines predictions from multiple decision trees to generate a final prediction.

### ⚙️ How It Works

1. 📥 **Input Data:** The user provides the required feature values.
2. 🧹 **Preprocessing:** Input values are prepared in the format expected by the trained model.
3. 🌳 **Tree Predictions:** The Random Forest model uses its trained decision trees.
4. 🧮 **Final Prediction:** The model combines the tree outputs according to its prediction task.
5. 📤 **Output:** The prediction is returned to the frontend.

### 💡 Why Random Forest?

- Works with structured tabular data.
- Can model non-linear relationships.
- Combines multiple decision trees.
- Is available through Scikit-learn.
- Can be used for classification or regression, depending on the target.

### 📊 Model Evaluation

The model should be evaluated using metrics suitable for its actual task.

For classification, possible metrics include:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion matrix

For regression, possible metrics include:

- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- \(R^2\) score

These are possible evaluation methods, not reported results. The final README should include only the metrics actually calculated for the trained model.

---

## 🖼️ Deep Learning Image Model

### 🧠 Technologies Used

- **TensorFlow:** Deep Learning framework.
- **Keras:** API used to build, load, train, or run the image model.
- **NumPy:** Helps prepare image arrays for model input.
- **OpenCV:** Handles image reading, resizing, and image processing in the backend.

### 🔄 Image Prediction Workflow

1. 📤 **Upload:** The user selects a terrain image.
2. 🔍 **Validation:** The backend checks whether the uploaded image can be read.
3. 🖼️ **Preprocessing:** The image is resized and converted into the format expected by the model.
4. 🧠 **Prediction:** The trained image model processes the image.
5. 🎭 **Mask Processing:** The output is converted into a segmentation mask according to the model's output format.
6. 🎨 **Visualization:** The predicted region is highlighted in the result image.
7. 📥 **Display:** The frontend displays the prediction and mask.

### 🎯 Image Segmentation

Image segmentation identifies the pixels belonging to a target region.

In this project:

- The original terrain image is the input.
- The segmentation mask represents the predicted target region.
- The mask helps visualize the areas classified by the model.
- The final visualization combines the original image with the highlighted predicted regions.

The model's architecture, threshold, image dimensions, loss function, and training settings depend on the actual training code.

### ⚠️ Prediction Notes

- A predicted mask is not proof that a real landslide exists.
- The quality of the output depends on the training data and model performance.
- Incorrect image preprocessing or mask alignment can affect the result.
- The model should be tested on suitable unseen images before real-world use.

---

## 🛠️ Technology Stack

### 💻 Programming Language

| Technology | Purpose |
|---|---|
| 🐍 Python | Backend, data processing, and model execution |
| 🌐 HTML | Web page structure |
| 🎨 CSS | Styling, layout, and responsive design |
| ⚛️ JavaScript | Frontend application logic through React |

### 🧠 Machine Learning and Deep Learning

| Library | Purpose |
|---|---|
| TensorFlow | Deep Learning operations |
| Keras | Image model API |
| Scikit-learn | Random Forest and other ML utilities |
| NumPy | Numerical arrays and data operations |
| Pandas | Tabular data loading and processing |
| Matplotlib | Data visualization and plotting |
| OpenCV | Image reading and preprocessing |

### 🌐 Web Development

| Technology | Purpose |
|---|---|
| React | Interactive frontend |
| Flask | Python backend and API routes |
| CSS | Custom page styling |
| HTML | Page structure and file upload interface |

---

## 🔄 System Architecture and Workflow

The application has three main parts: the frontend, the backend, and the trained models.

### 🏗️ High-Level Architecture

```text
                 👤 USER
                    |
                    v
           🌐 REACT FRONTEND
                    |
          +---------+---------+
          |                   |
          v                   v
    🖼️ IMAGE MODEL       📊 TABULAR MODEL
       INPUT                  INPUT
          |                   |
          +---------+---------+
                    |
                    v
             ⚙️ FLASK API
                    |
          +---------+---------+
          |                   |
          v                   v
    🧠 IMAGE MODEL       🌳 RANDOM FOREST
    TensorFlow/Keras      Scikit-learn
          |                   |
          v                   v
     🎭 MASK + RESULT     📈 PREDICTION
          |                   |
          +---------+---------+
                    |
                    v
           📤 FRONTEND RESULT
```

*This diagram shows the main logical flow. The exact API routes and execution order depend on the implementation.*

### 🖼️ Image Model Workflow

```text
Upload Image
     |
     v
React Frontend
     |
     v
Flask Image API
     |
     v
Image Preprocessing
     |
     v
TensorFlow / Keras Model
     |
     v
Prediction Mask
     |
     v
Mask Visualization
     |
     v
Display Result
```

### 📊 Tabular Model Workflow

```text
Enter Feature Values
         |
         v
React Form
         |
         v
Flask Prediction API
         |
         v
Input Preprocessing
         |
         v
Random Forest Model
         |
         v
Prediction Output
         |
         v
Display Result
```

---

## 📁 Project Folder Structure

The following is an example of the intended repository structure. Keep the actual filenames and folders consistent with your project.

```text
Landslide-Detection-AI/
│
├── 📂 backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── 📂 models/
│   │   └── [trained model files]
│   ├── 📂 generated_masks/
│   │   └── [generated prediction outputs]
│   └── 📂 other backend files
│
├── 📂 frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   ├── 📂 public/
│   └── 📂 src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── 📂 assets/
│       └── 📂 components/
│           ├── ImageModel.jsx
│           ├── ImageModel.css
│           ├── TextModel.jsx
│           └── TextModel.css
│
├── 📂 dataset/
│   ├── 📂 tabular/
│   │   └── [tabular dataset file]
│   └── 📂 images/
│       ├── 📂 train/
│       │   ├── 📂 images/
│       │   └── 📂 masks/
│       ├── 📂 validation/
│       │   ├── 📂 images/
│       │   └── 📂 masks/
│       └── 📂 test/
│           ├── 📂 images/
│           └── 📂 masks/
│
├── .gitignore
└── README.md
```

### 📌 Folder Description

| File or Folder | Purpose |
|---|---|
| `backend/` | Flask application and backend code |
| `app.py` | Backend routes and model prediction logic |
| `requirements.txt` | Python dependency list, if maintained |
| `models/` | Location for trained model files, if stored in the project |
| `generated_masks/` | Generated image prediction outputs, if saved locally |
| `frontend/` | React application |
| `src/` | Frontend source code |
| `public/` | Public frontend assets |
| `dataset/tabular/` | Location for the structured dataset, if organized this way |
| `dataset/images/` | Location for image segmentation data, if organized this way |
| `train/` | Training images and masks |
| `validation/` | Validation images and masks |
| `test/` | Test images and masks |
| `.gitignore` | Lists files and folders Git should ignore |
| `README.md` | Project documentation |

**Note:** The tree above is a documentation template, not a claim that every listed file or folder already exists. Update it to match the actual repository. Large datasets and trained model files may need separate storage.

---

## ⚙️ Installation and Setup

### 📌 Prerequisites

Install the following before running the project:

- Python
- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Landslide-Detection-AI.git
cd Landslide-Detection-AI
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2️⃣ Set Up the Python Backend

Open a terminal in the project root.

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the backend dependencies:

```bash
pip install flask tensorflow scikit-learn numpy pandas matplotlib opencv-python
```

If your project already has a complete `backend/requirements.txt`, use that file instead:

```bash
pip install -r backend/requirements.txt
```

### 3️⃣ Start the Flask Backend

```bash
cd backend
python app.py
```

Make sure the server starts without errors. The frontend must use the API address configured in your backend and frontend code.

### 4️⃣ Set Up the React Frontend

Open a second terminal at the project root:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### ⚠️ Before Running

- Ensure the trained models are available at the paths expected by the backend.
- Ensure dataset files are available if your code needs them at runtime.
- Check that the frontend API URLs match the running backend.
- Install any additional dependencies imported by your actual source code.
- Do not commit API keys, passwords, or private configuration files.

---

## 🚀 How to Use

### 🖼️ Image Model

1. Open the Landslide Detection AI web application.
2. Navigate to the **Image Model** page.
3. Select a suitable terrain image.
4. Preview the uploaded image.
5. Click **Analyze Image**.
6. Wait for the backend model to finish processing.
7. View the prediction result.
8. View the segmentation mask to inspect the regions identified by the model.

### 📊 Tabular Prediction Model

1. Navigate to the **Text Model** page.
2. Enter the required values in the input fields.
3. Check that the input values are valid.
4. Submit the form to request a prediction.
5. Wait for the Flask backend to process the input.
6. View the prediction returned by the trained Random Forest model.

### 🛠️ Troubleshooting

| Problem | What to Check |
|---|---|
| Backend connection error | Confirm that Flask is running and the API URL is correct. |
| Model file not found | Check the model path configured in the backend. |
| Image upload error | Use a supported image format and check the file size. |
| Prediction error | Check the backend terminal for the full error message. |
| Missing Python module | Install the missing dependency in the active environment. |
| Frontend dependency error | Run `npm install` inside `frontend/`. |
| Mask not displayed | Check the mask API URL and whether the backend generated the expected file. |

---

## 🎯 Applications, Limitations, and Future Scope

### 🌍 Potential Applications

- ⛰️ **Terrain Analysis:** Analyze images of terrain for landslide-related regions.
- 🌧️ **Environmental Data Analysis:** Study relationships between weather, slope, and recorded landslide events.
- 📊 **Risk Assessment Support:** Help explore possible landslide-related patterns in available data.
- 🎓 **Learning and Research:** Demonstrate how Machine Learning and Deep Learning can be combined in a web application.
- 🌐 **AI-Based Tools:** Provide a simple interface for users to test trained models.

These are potential applications. Their usefulness depends on the quality of the data, the model's performance, and proper real-world validation.

### ⚠️ Limitations

- Model predictions may be incorrect.
- Results depend on the quality and variety of the training data.
- Images from different locations, seasons, or lighting conditions may produce different results.
- Historical event data may contain missing, incorrect, or incomplete values.
- Data leakage can make evaluation results look better than real-world performance.
- The image model and tabular model may have different levels of accuracy.
- The application has not been established as a certified landslide warning system.

### 🚀 Future Scope

- 🗺️ Integrate reliable geographical and terrain data.
- 🌦️ Add verified weather data for improved risk assessment.
- 📍 Explore map-based visualization of landslide-related information.
- 📈 Improve model evaluation using suitable metrics and independent test data.
- 🖼️ Expand the image dataset with diverse terrain conditions.
- ⚡ Improve prediction speed and backend efficiency.
- 🔔 Explore alert systems after proper validation and expert review.
- ☁️ Deploy the application for wider access.

### 🎯 Final Goal

To build an accessible AI-based application that combines image segmentation and tabular Machine Learning to support landslide-related analysis and help users understand model predictions.

---

**Built with ❤️ using Python, React, Flask, TensorFlow, Keras, and Scikit-learn.**
