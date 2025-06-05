import React from 'react';
import '../styles/content.css';

const Content = () => {
  return (
    <div className="content-container">
      <nav className="content-nav">
        <a href="#projects">Proyectos</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Formación</a>
        <a href="#contact">Contacto</a>
      </nav>

      <div className="content-main">
        <h2>Bienvenido a mi portafolio</h2>
        <p>
          Aquí podés encontrar mis proyectos, experiencia, educación y formas de contacto. 
          ¡Gracias por visitar!
        </p>
      </div>
    </div>
  );
};

export default Content;
