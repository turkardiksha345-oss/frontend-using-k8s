import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Running ✅");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 DevOps Dashboard</h1>
        <p>Kubernetes + ArgoCD + Monitoring</p>

        <p>Status: {status}</p>
        <p>Time: {time}</p>

        <button onClick={() => setStatus("Clicked 🎉")}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;