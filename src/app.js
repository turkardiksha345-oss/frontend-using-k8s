import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      
      {/* Navbar */}
      <nav className="navbar">
        <h2>🚀 DevOps Dashboard</h2>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#metrics">Metrics</a>
          <a href="#status">Status</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Frontend App on Kubernetes</h1>
        <p>Scalable • Monitored • Automated</p>
        <button className="btn">Explore</button>
      </header>

      {/* Features Section */}
      <section id="features" className="section">
        <h2>⚙️ Features</h2>
        <div className="cards">
          <div className="card">
            <h3>🚀 Kubernetes</h3>
            <p>Deployed using Deployment, Service, and Ingress</p>
          </div>
          <div className="card">
            <h3>⚡ Autoscaling</h3>
            <p>KEDA scales pods based on CPU usage</p>
          </div>
          <div className="card">
            <h3>📊 Monitoring</h3>
            <p>Prometheus & Grafana for real-time metrics</p>
          </div>
          <div className="card">
            <h3>🔄 GitOps</h3>
            <p>ArgoCD manages deployments from Git</p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="section">
        <h2>📈 System Metrics</h2>
        <div className="cards">
          <div className="card metric">
            <h3>CPU Usage</h3>
            <p>65%</p>
          </div>
          <div className="card metric">
            <h3>Memory Usage</h3>
            <p>512MB</p>
          </div>
          <div className="card metric">
            <h3>Pods Running</h3>
            <p>3</p>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section id="status" className="section">
        <h2>🟢 System Status</h2>
        <ul className="status-list">
          <li>✔ Kubernetes Cluster Running</li>
          <li>✔ Ingress Configured</li>
          <li>✔ Autoscaling Active</li>
          <li>✔ Monitoring Enabled</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 DevOps Project | Built with React + Kubernetes</p>
      </footer>

    </div>
  );
}

export default App;