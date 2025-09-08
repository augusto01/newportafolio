import React from "react";
import { Link } from "react-router-dom";
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

        {/* Links con React Router */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Sobre Mi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos">
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiencia">
                Experiencia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formacion">
                Formación
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
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