import React from 'react';
import '../styles/Content.css';
import Navbar from './Navbar';
import SplitText from './SplitText';
import LiquidEther from './UI/LiquidEther';
import TextType from './UI/TextType';
import PillNav from './UI/PillNav';
import Logo from './UI/Logo';

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
          text="Bienvenido a mi portafolio. Aquí encontrarás algunos de mis proyectos, información sobre mí y formas de contactarme."
          tag="p"
          splitType="lines"
          delay={80}
          textAlign="center"
        />

    
        <PillNav
        logo={<Logo />}
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.out"
          baseColor="#051f57ff"            // texto normal
          pillTextColor="#7CFF00"        // texto base
          pillColor="#05021bff"            // fondo hover / active
          hoveredPillTextColor="#7CFF00" // texto sobre pill

        />



      </div>


    </div>


  );
};

export default Content;
