import { useState } from "react";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [bg, setBg] = useState("linear-gradient(135deg,#f6d365 0%,#fda085 100%)");
  const [speed, setSpeed] = useState(12);
  const [animId, setAnimId] = useState(null);

  const solidPresets = [
    "#ffffff", "#ffefd5", "#fce4ec", "#dff7ef",
    "#cfe8ff", "#f8d7ff", "#222831", "#2b2b2b"
  ];

  const gradientPresets = [
    "linear-gradient(135deg,#f6d365 0%,#fda085 100%)",
    "linear-gradient(135deg,#a1c4fd 0%,#c2e9fb 100%)",
    "linear-gradient(135deg,#fbc2eb 0%,#a6c1ee 100%)",
    "linear-gradient(135deg,#ff9a9e 0%,#fecfef 99%)",
    "linear-gradient(135deg,#89f7fe 0%,#66a6ff 100%)",
    "linear-gradient(135deg,#f77062 0%,#fe5196 100%)"
  ];

  const applySolid = (color) => {
    stopAnimation();
    setBg(color);
  };

  const applyGradient = (grad) => {
    stopAnimation();
    setBg(grad);
  };

  const updateCustomGradient = (c1, c2) => {
    stopAnimation();
    setBg(`linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`);
  };

  const startAnimation = () => {
    if (animId) return;
    let t = 0;
    const id = setInterval(() => {
      const a = `hsl(${t % 360} 80% 65%)`;
      const b = `hsl(${(t + 60) % 360} 70% 55%)`;
      setBg(`linear-gradient(135deg, ${a}, ${b})`);
      t += speed / 2;
    }, 80);
    setAnimId(id);
  };

  const stopAnimation = () => {
    if (animId) {
      clearInterval(animId);
      setAnimId(null);
    }
  };

  return (
    <div className="app" data-theme={theme} style={{ background: bg }}>
      <div className="card">
        <h1>Background Changer</h1>

        <div className="row">
          {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="btn">
            Toggle Light/Dark
          </button> */}
          <button
            onClick={() => {
              setTheme("light");
              setBg(gradientPresets[0]);
              stopAnimation();
            }}
            className="btn"
          >
            Reset
          </button>
        </div>

        <label>Solid Colors</label>
        <div className="row">
          {solidPresets.map((c, i) => (
            <button key={i} className="preset" style={{ background: c }} onClick={() => applySolid(c)} />
          ))}
        </div>

        <label>Gradient Presets</label>
        <div className="row">
          {gradientPresets.map((g, i) => (
            <button key={i} className="preset" style={{ background: g }} onClick={() => applyGradient(g)} />
          ))}
        </div>

        <label>Custom Single Color</label>
        <input type="color" onChange={(e) => applySolid(e.target.value)} />

        <label>Custom Gradient</label>
        <div className="row">
          <input
            type="color"
            onChange={(e) => updateCustomGradient(e.target.value, document.getElementById("g2").value)}
            id="g1"
          />
          <input
            type="color"
            onChange={(e) => updateCustomGradient(document.getElementById("g1").value, e.target.value)}
            id="g2"
          />
        </div>

        <label>Animated Gradient</label>
        <div className="row">
          <button onClick={startAnimation} className="btn">Start</button>
          <button onClick={stopAnimation} className="btn">Stop</button>
          <input
            type="range"
            min="2"
            max="30"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
