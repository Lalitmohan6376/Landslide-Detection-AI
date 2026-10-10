import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TextModel from "./pages/TextModel";
import ImageModel from "./pages/ImageModel";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <Link to="/" className="logo">Landslide AI</Link>

        <div className="nav-links">
          <Link to="/#home">Home</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/image-model">Image Model</Link>
          <Link to="/text-model">Text Model</Link>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="hero-tag">AI-POWERED LANDSLIDE DETECTION</span>
          <h1>
            Understand the Earth.
            <br />
            <span className="gradient-text">Detect the Risk.</span>
          </h1>
          <p>
            Landslides can cause serious damage to people, infrastructure,
            and the environment. Our AI-based system helps identify
            potential landslide risks using terrain images and environmental data.
          </p>
        </div>

        <div className="hero-visual">
          <div className="mountain-scene">
            <div className="mountain mountain-back"></div>
            <div className="mountain mountain-front"></div>
            <div className="risk-point"></div>
          </div>

          <div className="floating-card">
            <span className="status-dot"></span>
            AI-Based Risk Analysis
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading">
          <span className="hero-tag">ABOUT US</span>
          <h2>Making Landslide Detection Smarter</h2>
          <p>
            Understanding landslides and using AI to support early
            identification of potential hazards.
          </p>
        </div>

        <div className="about-grid">
          <article className="glass-card">
            <div className="card-icon">⛰</div>
            <h3>What Are Landslides?</h3>
            <p>
              Landslides occur when rock, soil, or debris moves down a slope
              due to gravity. They can happen suddenly and cause significant damage.
            </p>
          </article>

          <article className="glass-card">
            <div className="card-icon">🌧</div>
            <h3>What Causes Them?</h3>
            <p>
              Heavy rainfall, earthquakes, steep slopes, erosion, and
              human activities can increase the likelihood of landslides.
            </p>
          </article>

          <article className="glass-card">
            <div className="card-icon">🤖</div>
            <h3>How AI Helps</h3>
            <p>
              AI models can analyze terrain images and environmental
              information to help identify patterns associated with landslide risk.
            </p>
          </article>
        </div>

        <div className="warning-note">
          <span>⚠</span>
          <p>
            <strong>Important:</strong> AI predictions are estimates, not
            guaranteed warnings. Always follow official alerts and local
            disaster-management guidance.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Landslide AI. Built for a safer future.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-model" element={<TextModel />} />
        <Route path="/image-model" element={<ImageModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;