import React from "react";
import "../styles/About.css";
import PillNav from "./UI/PillNav";
import FlipCard from "./UI/FlipCard";
import Logo from './UI/Logo';
import LogoWall from "./UI/LogoWall";

// Definimos los datos fuera del componente para que el código sea más legible
const MAIN_STACK = [
  { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb",   },
  { name: "Express", img: "https://skillicons.dev/icons?i=express",   },
  { name: "React", img: "https://skillicons.dev/icons?i=react",  },
  { name: "NodeJS", img: "https://skillicons.dev/icons?i=nodejs", },
];

const OTHER_SKILLS = [
  { name: "PostgreSQL", img: "https://skillicons.dev/icons?i=postgres" },
  { name: "MySQL", img: "https://skillicons.dev/icons?i=mysql" },
  { name: "AWS", img: "https://skillicons.dev/icons?i=aws" },
  { name: "GitHub", img: "https://skillicons.dev/icons?i=github" },
  { name: "Git", img: "https://skillicons.dev/icons?i=git" },
  { name: "SQL Server", img: "https://skillicons.dev/icons?i=mssql" },
];

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },          
  { label: 'Sobre Mi', href: '/about' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Contacto', href: '/contact' }
];

const About = () => {
  return (
    <>
      {/* IMPORTANTE: El error "Cannot read properties of undefined (reading 'map')" 
          en PillNav se soluciona asegurando que pasamos la prop 'items' correctamente.
      */}
      <PillNav
        logo={<Logo />}
        items={NAV_ITEMS} 
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
            
            {/* COLUMNA IZQUIERDA: Tarjeta de contacto */}
            <div className="col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">
              <FlipCard />
            </div>

            {/* COLUMNA DERECHA: Información y Skills */}
            <div className="col-lg-8">
              <h2 className="about-title">Sobre Mí</h2>
              <p className="about-text">
                Soy <strong>Almirón Pedro Augusto</strong>, Como Programador de Sistemas, mi fortaleza reside en la arquitectura de aplicaciones Full Stack eficientes. Soy experto en el ecosistema de JavaScript, con un dominio profundo de React para interfaces dinámicas y Node.js/Express para backends potentes.
              </p>

              <ul className="list-unstyled about-list">
                <li><i className="fas fa-user me-2"></i><strong>Nombre:</strong> Almirón Pedro Augusto</li>
                <li><i className="fas fa-birthday-cake me-2"></i><strong>Fecha de nacimiento:</strong> 20 de Enero, 2000</li>
                <li><i className="fas fa-envelope me-2"></i><strong>Email:</strong> augustoalmiron@example.com</li>
                <li><i className="fas fa-phone me-2"></i><strong>Teléfono:</strong> +54 3794 123456</li>
                <li><i className="fas fa-map-marker-alt me-2"></i><strong>Ubicación:</strong> Corrientes, Argentina</li>
              </ul>

              <div className="skills-container mt-5">
                {/* BLOQUE STACK PRINCIPAL */}
                <div className="skills-wrapper">
                  <h4 className="skills-subtitle">Stack Principal</h4>
                  <LogoWall 
                    items={MAIN_STACK} 
                    direction="left" 
                    speed={15} 
                    pauseOnHover={true}
                  />
                </div>

                {/* BLOQUE OTRAS SKILLS */}
                <div className="skills-wrapper mt-4">
                  <h4 className="skills-subtitle">Otras Skills</h4>
                  <LogoWall 
                    items={OTHER_SKILLS} 
                    direction="right" 
                    speed={25} 
                    pauseOnHover={true}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;