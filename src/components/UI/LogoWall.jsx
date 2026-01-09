import React from "react";
import "../../styles/LogoWall.css";

const LogoWall = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="logo-wall-container">
      <div className={`logo-wall-track ${direction} hover-pause`}>
        <div className="logo-wall-content" style={{ animationDuration: `${speed}s` }}>
          {/* Repetimos más veces para que el carrusel pequeño del stack principal no se corte */}
          {[...items, ...items, ...items, ...items].map((skill, index) => (
            <div key={index} className={`logo-item ${skill.featured ? "featured-icon" : ""}`}>
              <img src={skill.img} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoWall;