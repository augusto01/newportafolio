import React from 'react';
import '../styles/navbar.css'; // Asegurate de crear y vincular este archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#formacion">Formación</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
