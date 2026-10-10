
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TextModel.css";

const initialForm = {
  country: "",
  type: "",
  trigger: "",
  location: "",
  precip: "",
  temp: "",
  air: "",
  humidity: "",
  wind: "",
  slope: "",
  year: "2026",
  month: "1"
};

const fields = [
  { name: "country", label: "Country", type: "text" },
  { name: "type", label: "Landslide Type", type: "text" },
  { name: "trigger", label: "Trigger", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "precip", label: "Precipitation", type: "number" },
  { name: "temp", label: "Temperature", type: "number" },
  { name: "air", label: "Air Pressure", type: "number" },
  { name: "humidity", label: "Humidity", type: "number" },
  { name: "wind", label: "Wind Speed", type: "number" },
  { name: "slope", label: "Slope", type: "number" },
  { name: "year", label: "Year", type: "number" },
  { name: "month", label: "Month", type: "number" }
];

function TextModel() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/predict/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || data?.message || `Server error (${response.status}).`
        );
      }

      if (data?.prediction === undefined || data?.prediction === null) {
        throw new Error("The server did not return a prediction.");
      }

      const prediction = String(data.prediction).trim();

      if (prediction === "1") {
        setResult({
          type: "danger",
          title: "Landslide Detected",
          description: "The model predicts a landslide for the given input.",
          value: "1"
        });
      } else if (prediction === "0") {
        setResult({
          type: "safe",
          title: "No Landslide Detected",
          description: "The model predicts no landslide for the given input.",
          value: "0"
        });
      } else {
        throw new Error(`Unexpected prediction: ${prediction}. Expected 0 or 1.`);
      }
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to the backend. Please make sure Flask is running."
          : err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setFormData(initialForm);
    setResult(null);
    setError("");
  }

  return (
    <div className="text-model-page">
      <nav className="navbar">
        <Link to="/" className="logo">Landslide AI</Link>

        <div className="nav-links">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/image-model">Image Model</Link>
          <Link to="/text-model">Text Model</Link>
        </div>
      </nav>

      <main className="text-model-container">
        <header className="text-model-header">
          <span className="text-model-tag">AI-POWERED LANDSLIDE DETECTION</span>
          <h1>
            Landslide Risk
            <br />
            <span>Prediction</span>
          </h1>
          <p>
            Analyze environmental and location data using our trained
            machine learning model to predict potential landslide risk.
          </p>
        </header>

        <section className="text-model-card">
          <div className="text-model-card-heading">
            <div>
              <span className="text-section-label">PREDICTION INPUT</span>
              <h2>Environmental Details</h2>
              <p>Enter the required details to analyze the given conditions.</p>
            </div>
            <div className="text-card-icon">⌁</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="text-model-grid">
              {fields.map((field) => (
                <label className="text-model-field" key={field.name}>
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    min={field.name === "month" ? 1 : undefined}
                    max={field.name === "month" ? 12 : undefined}
                    step={field.type === "number" ? "any" : undefined}
                    required
                    disabled={loading}
                  />
                </label>
              ))}
            </div>

            <div className="text-model-actions">
              <button
                type="button"
                className="text-reset-btn"
                onClick={handleReset}
                disabled={loading}
              >
                Reset Fields
              </button>

              <button
                type="submit"
                className="text-predict-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="text-hourglass">⏳</span>
                    Analyzing Data...
                  </>
                ) : (
                  <>Predict Landslide <span>→</span></>
                )}
              </button>
            </div>
          </form>
        </section>

        {loading && (
          <section className="text-loading-card" role="status">
            <span className="text-hourglass-large">⏳</span>
            <div>
              <h3>Analyzing Your Data</h3>
              <p>The model is processing your input. Please wait...</p>
              <div className="text-loading-track">
                <span />
              </div>
            </div>
          </section>
        )}

        {!loading && result && (
          <section className={`text-result-card ${result.type}`} aria-live="polite">
            <div className="text-result-icon">
              {result.type === "danger" ? "!" : "✓"}
            </div>
            <div className="text-result-content">
              <span className="text-result-label">PREDICTION RESULT</span>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              <span className="text-result-value">
                Model output: {result.value}
              </span>
            </div>
          </section>
        )}

        {!loading && error && (
          <section className="text-error-card" role="alert">
            <span className="text-error-icon">!</span>
            <div>
              <h3>Prediction Failed</h3>
              <p>{error}</p>
            </div>
          </section>
        )}

        <div className="text-model-note">
          <span>ⓘ</span>
          <p>
            Predictions are estimates generated by the trained model, not
            guaranteed warnings. Follow official disaster-management alerts.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Landslide AI. Built for a safer future.</p>
      </footer>
    </div>
  );
}

export default TextModel;
