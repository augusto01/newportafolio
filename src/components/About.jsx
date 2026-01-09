import React from "react";
import "../styles/About.css";
import PillNav from "./UI/PillNav";
import FlipCard from "./UI/FlipCard";
import Logo from './UI/Logo';

const About = () => {
  return (
    <>
      <PillNav
        logo={<Logo />}
        items={[
          { label: 'Inicio', href: '/' },          
          { label: 'Sobre Mi', href: '/about' },
          { label: 'Experiencia', href: '/experiencia' },
          { label: 'Proyectos', href: '/projects' },
          { label: 'Contacto', href: '/contact' }
        ]}
        className="custom-nav"
        ease="power2.out"
        baseColor="#05021bff"
        pillTextColor="#757570ff"
        pillColor="#05021bff"
        hoveredPillTextColor="#7CFF00"
      />
      
      <section id="about" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* LADO IZQUIERDO: La Tarjeta */}
            <div className="col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">
              <FlipCard />
            </div>

            {/* LADO DERECHO: El Texto */}
            <div className="col-lg-8">
              <h2 className="about-title">Sobre Mí</h2>
              <p className="about-text">
                Soy <strong>Almirón Pedro Augusto</strong>, analista y programador de sistemas apasionado por la
                tecnología, el desarrollo web y la ciberseguridad. Me destaco por mi capacidad
                de resolver problemas, aprender rápido y trabajar en equipo.
              </p>

              <ul className="list-unstyled about-list">
                <li><i className="fas fa-user me-2"></i><strong>Nombre:</strong> Almirón Pedro Augusto</li>
                <li><i className="fas fa-birthday-cake me-2"></i><strong>Fecha de nacimiento:</strong> 20 de Enero, 2000</li>
                <li><i className="fas fa-envelope me-2"></i><strong>Email:</strong> augustoalmiron@example.com</li>
                <li><i className="fas fa-phone me-2"></i><strong>Teléfono:</strong> +54 3794 123456</li>
                <li><i className="fas fa-map-marker-alt me-2"></i><strong>Ubicación:</strong> Corrientes, Argentina</li>
              </ul>

              <div className="skills">
                <h4 className="skills-title">Cualidades</h4>
                <ul className="skills-list">
                  <li>💡 Pensamiento crítico y analítico</li>
                  <li>⚡ Desarrollo web con React y Node.js</li>
                  <li>🔒 Interés en Ciberseguridad</li>
                  <li>🤝 Trabajo en equipo y comunicación</li>
                  <li>🚀 Motivación para aprender y mejorar</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;