import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/FlipCard.css';
import miFoto from '../../assets/img/me.jpeg';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-scene">
      <motion.div
        className="card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* CARA FRONTAL */}
        <div className="card-face card-front">
          <div className="photo-wrapper">
            <img src={miFoto} alt="Augusto Almirón" className="main-photo" />
          </div>
          <div className="button-overlay">
            <button className="flip-btn" onClick={handleFlip}>
              CONTACTAME
            </button>
          </div>
        </div>

        {/* CARA TRASERA */}
        <div className="card-face card-back">
          <div className="content-container">
            <h2 className="lime-title">CONTACTO</h2>
            <div className="divider"></div>

            <div className="info-grid">
                <a href="https://wa.me/543782436853" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.076 1.382 4.6 1.383 5.438 0 9.863-4.425 9.866-9.863.002-2.635-1.023-5.112-2.884-6.974-1.861-1.862-4.337-2.887-6.971-2.888-5.439 0-9.864 4.425-9.867 9.863-.001 1.957.575 3.828 1.666 5.4l-.956 3.492 3.582-.939zM16.14 13.56c-.3-.15-1.774-.874-2.048-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.774-1.665-2.074-.175-.3-.02-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.507-.675-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.125 4.53.715.31 1.273.494 1.708.633.718.228 1.37.196 1.885.119.574-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                    </svg>
                    <span>WhatsApp</span>
                    </a>
              <a href="https://linkedin.com/in/augustoalmiron1" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/augusto01" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>

              <a href="mailto:almironaugusto404@gmail.com" className="contact-link">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Email</span>
              </a>
              
              {/* EL BOTÓN AHORA ES PARTE DEL FLUJO DIRECTO */}
              <button className="flip-btn-back" onClick={handleFlip}>
                VOLVER
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;