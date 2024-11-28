import React from "react";
import "./App.css";

function App() {
  // Box data: Each box has a color and class for positioning
  const boxData = [
    { className: "corner blue top-left" },
    { className: "corner yellow bottom-left" },
    { className: "corner orange top-right" },
    { className: "corner red bottom-right" },
  ];

  const leftGridData = [
    { className: "pink" },
    { className: "red" },
    { className: "lightblue" },
    { className: "brown" },
  ];

  const rightGridData = [
    { className: "magenta" },
    { className: "orange" },
    { className: "yellow" },
    { className: "navy" },
  ];

  return (
    <div className="container">
      {/* Corner Boxes */}
      {boxData.map((box, index) => (
        <div key={index} className={`box ${box.className} corner`}></div>
      ))}

      {/* Central Left Grid */}
      <div className="left-grid">
        {leftGridData.map((box, index) => (
          <div key={index} className={`box ${box.className}`}></div>
        ))}
      </div>

      {/* Central Right Grid */}
      <div className="right-grid">
        {rightGridData.map((box, index) => (
          <div key={index} className={`box ${box.className}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
