import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import PillNav from "./UI/PillNav";
import Logo from "./UI/Logo";
import Navbar from "./Navbar";
import "../styles/Formacion.css";

const Formacion = () => {
  

  const certificaciones = [
    {
      id: 1,
      titulo: "Full Stack Web Developer",
      institucion: "Nombre de la Academia",
      fecha: "2023",
      descripcion: "Especialización en desarrollo de aplicaciones escalables utilizando el MERN Stack. Aprendizaje basado en proyectos reales y metodologías ágiles.",
      credencialUrl: "#", // Link a PDF o LinkedIn
      imagen: "https://via.placeholder.com/400x250" // Miniatura de tu certificado
    },
    // Agrega más aquí...
  ];

  return (
    <div className="education-page">
    <Navbar />
      <Container className="education-container">
        <header className="education-header">
          <div className="hero-badge">CURRICULUM VITAE</div>
          <h1 className="education-title">certifies.<span>map()</span></h1>
          <p className="education-subtitle">
            Mi camino de aprendizaje continuo. Aquí detallo las certificaciones y cursos que han 
            forjado mi base técnica y capacidad analítica.
          </p>
        </header>

        <Row className="g-4">
          {certificaciones.map((cert) => (
            <Col key={cert.id} lg={6}>
              <div className="education-card">
                <div className="cert-image-side">
                  <img src={cert.imagen} alt={cert.titulo} />
                </div>
                <div className="cert-content-side">
                  <div className="cert-meta">
                    <span className="cert-date">{cert.fecha}</span>
                    <FaCertificate className="cert-icon-neon" />
                  </div>
                  <h3 className="cert-title">{cert.titulo}</h3>
                  <span className="cert-inst">{cert.institucion}</span>
                  <p className="cert-desc">{cert.descripcion}</p>
                  <a href={cert.credencialUrl} target="_blank" rel="noopener noreferrer" className="btn-verify">
                    Ver Credencial <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Formacion;