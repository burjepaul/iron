// Line.jsx
import React from "react";
import "./LineSplitterComponent.css";

const Line = ({ color = "#8B5E34", thickness = 1, width = "100%", margin = "10px 0px", svg }) => {
  return (
    <div className="line-wrapper" style={{ width, margin }}>
      <div className="line" style={{ backgroundColor: color, height: thickness }}></div>
      {svg && <div className="line-svg">{svg}</div>}
      <div className="line" style={{ backgroundColor: color, height: thickness }}></div>
    </div>
  );
};

export default Line;