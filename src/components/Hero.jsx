import React from 'react';
import '../styles/Hero.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MateModel from './MateModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';


<FontAwesomeIcon icon={faGithub} />


const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="hero-title">Augusto Almiron</h1>
        <h2 className="hero-subtitle">Desarrollador Full Stack (MERN)</h2>

       


        <a
            href="/cv_augusto.pdf"
            download
            className="btn-download-cv"
            aria-label="Descargar CV"
            >
            <i className="fas fa-download"></i> Descargar CV
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
