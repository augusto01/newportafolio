import React from 'react';
import '../styles/Content.css';
import Navbar from './Navbar';
import SplitText from './SplitText';
import LiquidEther from './UI/LiquidEther';
import TextType from './UI/TextType';
import PillNav from './UI/PillNav';
import SocialLinks from '../components/UI/SocialLinks';
import DownloadCVButton from './UI/DownloadCvButton';
import Logo from './UI/Logo';
import { href } from 'react-router-dom';

const Content = () => {
  return (
    <div className="content-container">
      {/* BACKGROUND */}
      <div className="hero-background">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={6}           // ⬇ mucho menos
          cursorSize={60}          // ⬇
          isViscous={false}
          resolution={0.35}        // ⬇ clave performance
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.4}
        />
      </div>

      {/* OVERLAY CONTENT */}
      <div className="hero-content">

        <div className="title">
          <TextType
            text="Almirón Pedro Augusto"
            as="h1"
            className="main-title"
            typingSpeed={100}
            cursorBlinkDuration={0.2}
          />
          <br />

          <SplitText
            text="Analista y Programador de Sistemas"
            tag="h2"
            splitType="words"
            delay={60}
            from={{ opacity: 0, y: 20 }}
          />
        </div>

        <SplitText
          text="Soy Desarrollador Full Stack con sólida formación en Sistemas de Información y experiencia construyendo aplicaciones web modernas, escalables y orientadas al negocio.
          Trabajo principalmente con React, Node.js, MongoDB y Express, desarrollando tanto interfaces atractivas como APIs robustas."
          tag="p"
          splitType="lines"
          delay={80}
          textAlign="center"
        />


    
        <PillNav
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Sobre Mi', href: '/about' },
            { label: 'Experiencia', href: '/experiencia' },
            { label: 'Proyectos', href: '/projects' },
            { label: 'Formación', href: '/formacion' },
            { label: 'Contacto', href: '/contact' }
          ]}
          activeHref="/"   
          className="custom-nav"
          ease="power2.out"
          baseColor="#05021b"
          pillTextColor="#757570"
          pillColor="#05021b"
          hoveredPillTextColor="#7CFF00"
        />

        <SocialLinks />
        <DownloadCVButton />

        





      </div>


    </div>


  );
};

export default Content;
