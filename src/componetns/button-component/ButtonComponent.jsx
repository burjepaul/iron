import React from "react";
import "./ButtonComponent.css";

const Button = ({ children, variant = "gold", onClick }) => {
  return (
    <button className={`custom-btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;