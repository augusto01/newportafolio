import React from 'react';
import '../../styles/RecruiterdCard.css';

const RecruiterdCard = () => {
  return (
    <div className="recruiter-card">
      <div className="recruiter-glass-overlay"></div>
      
      <div className="recruiter-content">
        <div className="recruiter-header">
          <span className="recruiter-badge">RECRUITER ACCESS</span>
          <div className="pulse-icon"></div>
        </div>

        <h3 className="recruiter-title">¿Sos Recruiter? 🔍</h3>
        
        <p className="recruiter-text">
          Ahorrate la <strong>entrevista técnica</strong>. Diseñé una serie de 
          <em> code-reviews</em> donde explico la arquitectura y lógica detrás 
          de mis proyectos más complejos.
        </p>

        <a href="/projects" className="recruiter-cta">
          <span className="btn-text">VER EXPLICACIONES</span>
          <span className="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </span>
        </a>
      </div>

      <div className="recruiter-footer">
        <span className="footer-tag">#Efficiency</span>
        <span className="footer-tag">#CleanCode</span>
        <span className="footer-tag">#MERN</span>
      </div>
    </div>
  );
};

export default RecruiterdCard;