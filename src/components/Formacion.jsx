import React, { useState } from "react";
import { Container, Row, Col, Modal, Badge } from "react-bootstrap";
import { FaCertificate, FaExternalLinkAlt, FaInfoCircle, FaUniversity, FaGraduationCap } from "react-icons/fa";
import Navbar from "./Navbar";
import "../styles/Formacion.css";

// Imports de imágenes
import argentinaPrograma from "../assets/img/certs/1717439841330.jpg";
import node from "../assets/img/certs/mern.jpg";
import td from "../assets/img/certs/td.jpg";
import ibm from "../assets/img/certs/ibm.png";
import aws from "../assets/img/certs/aws.jpg";
import dev from "../assets/img/certs/dev.jpg";
import oracle from "../assets/img/certs/oracle.jpg";
import p5 from "../assets/img/certs/p5.jpg";
import unneLogo from "../assets/img/certs/unne_logo.png"; 

const Formacion = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleShow = (cert) => { setSelectedCert(cert); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setSelectedCert(null); };

  const academia = [
    {
      id: "uni-1",
      titulo: "Analista Programador Universitario",
      institucion: "UNNE - FACENA",
      fecha: "Egreso: 2025",
      estado: "GRADUADO",
      colorBadge: "success", 
      descripcion: "Formación integral en algoritmia, estructuras de datos, bases de datos, estadísticas y desarrollo de sistemas. El documento adjunto es la certificación oficial de finalización de estudios.",
      credencialUrl: "/docs/comprobante.pdf", 
      imagen: unneLogo, 
      logoCard: unneLogo 
    },
    {
      id: "uni-2",
      titulo: "Lic. en Sistemas de Información",
      institucion: "UNNE - FACENA",
      fecha: "En curso (Tesis)",
      estado: "TESIS EN DESARROLLO",
      colorBadge: "primary",
      descripcion: "Formación de grado enfocada en gestión y arquitectura. Actualmente desarrollando tesina sobre IA aplicada al sector bancario junto al Dr. Bernal.",
      credencialUrl: "#", 
      imagen: unneLogo,
      logoCard: unneLogo 
    }
  ];

  // Ordenados de más reciente (2026) a más antiguo (2022)
  const certificaciones = [
    {
      id: 5,
      titulo: "AWS Cloud Practitioner Essentials",
      institucion: "AWS",
      fecha: "4 de Junio de 2026",
      descripcion: <>Infraestructura global de <span>AWS</span>, seguridad en la nube, modelos de costos y servicios fundamentales de arquitectura cloud.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/247545361/treasury/",
      imagen: aws 
    },
    {
      id: 1,
      titulo: "MERN Stack Developer",
      institucion: "Udemy",
      fecha: "24 de Febrero de 2025",
      descripcion: <>Dominio del stack MERN (<span>MongoDB</span>, <span>Express</span>, <span>React</span>, <span>Node</span>). Gestión de estados complejos y despliegue de microservicios.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/923223204/treasury/",
      imagen: node
    },
    {
      id: 6,
      titulo: "Bootcamp Data Analyst",
      institucion: "Devlights",
      fecha: "19 de Diciembre de 2025",
      descripcion: <>Transformación de bases de datos de producción a modelos analíticos. Uso de <span>SQL</span>, <span>Python</span> y visualización con <span>Metabase</span>.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/1014702798/treasury/",
      imagen: dev 
    },
    {
      id: 3,
      titulo: "Programación Web Full Stack",
      institucion: "Talentos Digitales - TeLCO",
      fecha: "Diciembre de 2025",
      descripcion: <>Desarrollo Backend con <span>Codeigniter</span> para gestión de tickets y refactorización integral a <span>React</span> y <span>NodeJS</span>.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/1476059864/treasury/",
      imagen: td 
    },
    {
      id: 4,
      titulo: "Extracción de bases de datos inteligentes",
      institucion: "IBM",
      fecha: "Diciembre de 2024",
      descripcion: <>Diseño de bases de datos <span>NoSQL</span> y extracción masiva de datos mediante <span>Python</span> para análisis predictivo con IA.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/953755776/treasury/",
      imagen: ibm 
    },
    {
      id: 8,
      titulo: "Bootcamp Full stack developer",
      institucion: "Plataforma 5",
      fecha: "Junio de 2024",
      descripcion: <>Entrenamiento intensivo en <span>JavaScript</span> moderno y <span>React</span> para la creación de soluciones web de alto tráfico.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/1599531178/treasury/",
      imagen: p5 
    },
    {
      id: 7,
      titulo: "Programación Bases de datos ORACLE",
      institucion: "UTN BA",
      fecha: "15 de Marzo de 2024",
      descripcion: <>Desarrollo avanzado en <span>PL/SQL</span>, optimización de consultas (Tuning) y diseño de esquemas en entornos corporativos.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/1375054376/treasury/",
      imagen: oracle 
    },
    {
      id: 2,
      titulo: "Full Stack Web Developer",
      institucion: "Sé Programar",
      fecha: "11 de Junio de 2022",
      descripcion: <>Desarrollo de aplicaciones escalables utilizando <span>HTML</span>, <span>JS</span>, <span>CSS</span> y <span>MySQL</span> bajo metodologías ágiles.</>,
      credencialUrl: "https://www.linkedin.com/in/augustoalmiron1/overlay/Certifications/1600424233/treasury/",
      imagen: argentinaPrograma 
    }
  ];

  return (
    <div className="education-page">
      <Navbar />
      <Container className="education-container">
        
        <header className="education-header">
          <div className="hero-badge">ACADEMIC BACKGROUND</div>
          <h1 className="education-title">university.<span>profile()</span></h1>
        </header>

        <Row className="justify-content-center g-4 mb-5">
          {academia.map((item) => (
            <Col lg={6} key={item.id}>
              <div className="academic-high-card">
                <div className="academic-logo-card">
                  <img src={item.logoCard} alt="Logo UNNE" className="img-fluid rounded" />
                </div>
                <div className="academic-info">
                  <Badge bg={item.colorBadge} className="mb-2 status-badge text-dark">{item.estado}</Badge>
                  <h3>{item.titulo}</h3>
                  <h5>{item.institucion}</h5>
                  <p className="text-white academic-desc">{item.descripcion}</p>
                  {item.credencialUrl !== "#" && (
                    <button onClick={() => handleShow(item)} className="btn-detail-uni">
                      Ver Comprobante PDF <FaInfoCircle />
                    </button>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <hr className="section-divider" />

        <header className="education-header">
          <h1 className="education-title">certifies.<span>map()</span></h1>
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
                  <p className="text-white cert-desc-card mt-2 mb-3">{cert.descripcion}</p>
                  <button onClick={() => handleShow(cert)} className="btn-detail">
                    Detalles <FaInfoCircle />
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered size="xl" className="cert-modal">
        {selectedCert && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCert.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="align-items-center">
                <Col lg={selectedCert.id === "uni-1" ? 8 : 7}>
                  <div className="modal-preview-container">
                    {selectedCert.id === "uni-1" ? (
                      <object data={selectedCert.credencialUrl} type="application/pdf" width="100%" height="550px">
                        <p className="text-white">Tu navegador no soporta PDFs. <a href={selectedCert.credencialUrl}>Descargar aquí</a></p>
                      </object>
                    ) : (
                      <img src={selectedCert.imagen} alt="Cert" className="img-fluid rounded shadow-lg" />
                    )}
                  </div>
                </Col>
                <Col lg={selectedCert.id === "uni-1" ? 4 : 5}>
                  <h5>{selectedCert.institucion}</h5>
                  <p className="text-accent">{selectedCert.fecha}</p>
                  <hr />
                  <p className="modal-desc-text text-white">{selectedCert.descripcion}</p>
                  {selectedCert.credencialUrl !== "#" && (
                    <a href={selectedCert.credencialUrl} target="_blank" rel="noopener noreferrer" className="btn-verify-modal">
                      {selectedCert.id === "uni-1" ? "Abrir Documento" : "Ver Credencial Oficial"} <FaExternalLinkAlt />
                    </a>
                  )}
                </Col>
              </Row>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Formacion;