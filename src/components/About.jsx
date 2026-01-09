import React from "react";
import "../styles/About.css";
import PillNav from "./UI/PillNav";
import FlipCard from "./UI/FlipCard";
import RecruiterCard from "./UI/RecruiterdCard"; // Corregido el nombre del archivo
import Logo from './UI/Logo';
import LogoWall from "./UI/LogoWall";

const MAIN_STACK = [
  { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb", featured: true },
  { name: "Express", img: "https://skillicons.dev/icons?i=express", featured: true },
  { name: "React", img: "https://skillicons.dev/icons?i=react", featured: true },
  { name: "NodeJS", img: "https://skillicons.dev/icons?i=nodejs", featured: true },
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
            
            {/* COLUMNA IZQUIERDA: Tarjeta de contacto + Recruiter Card debajo */}
            <div className="col-lg-4 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <FlipCard />
              {/* Espaciado superior para que no estén pegadas */}
              <div className="mt-4 w-100 d-flex justify-content-center">
                <RecruiterCard />
              </div>
            </div>

            {/* COLUMNA DERECHA: Información y Skills */}
            <div className="col-lg-8">
              <h2 className="about-title">Arquitectura & <br/> Desarrollo</h2>
              <p className="about-text">
                Soy <strong>Almirón Pedro Augusto</strong>. Como Programador de Sistemas, mi fortaleza reside en la arquitectura de aplicaciones <strong>Full Stack</strong> eficientes. Soy experto en el ecosistema de JavaScript, con un dominio profundo de <strong>React</strong> para interfaces dinámicas y <strong>Node.js/Express</strong> para backends potentes.
              </p>

              <ul className="list-unstyled about-list">
                <li><i className="fas fa-birthday-cake me-2"></i><strong>BIRTHDAY:</strong> 23 de Agosto, 2000</li>
                <li><i className="fas fa-envelope me-2"></i><strong>EMAIL:</strong> augustoalmiron404@gmail.com</li>
                <li><i className="fas fa-phone me-2"></i><strong>PHONE:</strong> +54 3782 436853</li>
                <li><i className="fas fa-map-marker-alt me-2"></i><strong>LOCATION:</strong> Corrientes, Argentina</li>
              </ul>

              <div className="skills-container mt-5">
                <div className="skills-wrapper">
                  <h4 className="skills-subtitle">Main Stack</h4>
                  <LogoWall items={MAIN_STACK} direction="left" speed={15} pauseOnHover={true} />
                </div>

                <div className="skills-wrapper mt-4">
                  <h4 className="skills-subtitle">Complementary Skills</h4>
                  <LogoWall items={OTHER_SKILLS} direction="right" speed={25} pauseOnHover={true} />
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