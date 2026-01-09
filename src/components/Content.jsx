import React from 'react';
import '../styles/Content.css';
import TextType from './UI/TextType';
import PillNav from './UI/PillNav';
import SocialLinks from '../components/UI/SocialLinks';
import DownloadCVButton from './UI/DownloadCvButton';
import Logo from './UI/Logo';
import RecruiterCard from "./UI/RecruiterdCard"; // Verifica el nombre de tu archivo

const Content = () => {
  return (
    <div className="content-container">
      <PillNav
        logo={<Logo />}
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Sobre Mi', href: '/about' },
          { label: 'Experiencia', href: '/experiencia' },
          { label: 'Proyectos', href: '/projects' },
          { label: 'Formación', href: '/formacion' },
          { label: 'Contacto', href: '/contact' }
        ]}
        activeHref="/"   
        baseColor="#05021b"
        pillTextColor="#757570"
        pillColor="#05021b"
        hoveredPillTextColor="#7CFF00"
      />

      <main className="hero-main">
        <div className="hero-text-content">
          
          <div className="title-wrapper">
            <TextType
              text="Almirón Pedro Augusto"
              as="h1"
              className="main-title"
              typingSpeed={100}
            />
            <h2 className="sub-title reveal-text">
              Analista en Sistemas | Desarrollador Full Stack (MERN)
            </h2>
          </div>

          <p className="hero-description reveal-text-delay">
            Construyo soluciones escalables y seguras, especializándome en el ecosistema 
            JavaScript para productos digitales de alto rendimiento.
          </p>

          <div className="hero-actions reveal-buttons">
            <SocialLinks />
            
            <DownloadCVButton />

            <div className="home-recruiter-box">
               <RecruiterCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;