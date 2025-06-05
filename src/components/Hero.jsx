import React from 'react';
import '../styles/Hero.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MateModel from './MateModel';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h1 className="hero-title">Augusto Almiron</h1>
        <h2 className="hero-subtitle">Desarrollador Full Stack (MERN)</h2>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/augustoalmiron1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/augusto01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/Augusto23082" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <a href="/ruta-a-tu-cv.pdf" download className="btn-download-cv">
          Descargar CV
        </a>

        <div id="mate-model" className="mate-model">
          <Canvas camera={{ position: [0, 1.5, 3] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <MateModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
