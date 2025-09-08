import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent animated-navbar">
      <div className="container d-flex flex-column align-items-center">
        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiencia">Experiencia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formacion">Formación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Botón debajo y centrado */}
        <div className="mt-3">
          <a href="/cv.pdf" download className="btn btn-outline-info cv-button">
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
