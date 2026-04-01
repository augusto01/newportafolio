import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import { FaCode, FaPlayCircle, FaRocket, FaTimes } from "react-icons/fa";
import "../../styles/ProjectModal.css"; 

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  // Asumimos que project.imagenes es un array de URLs
  // Si no existe el array, usamos project.imagen como fallback
  const images = project.imagenes || [project.imagen];

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="tech-modal"
    >
      <div className="modal-header-custom">
        <button className="close-modal" onClick={onHide}>
          <FaTimes />
        </button>
        
        {/* Carrusel de Imágenes */}
        <Carousel interval={3000} indicators={images.length > 1} controls={images.length > 1}>
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img 
                src={img} 
                alt={`${project.nombre} slide ${idx}`} 
                className="modal-top-img d-block w-100" 
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Modal.Body className="modal-body-custom">
        <div className="modal-main-info">
          <h2 className="modal-project-title">
            {project.nombre} <FaRocket className="rocket-icon" />
          </h2>
          <p className="modal-description">{project.descripcion}</p>

          <div className="tech-section">
            <h4 className="tech-label">Stack Tecnológico</h4>
            <div className="tech-grid">
              {project.tecnologias?.map((t, i) => (
                <div key={i} className="tech-item">
                  {t.icon} <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="technical-brief">
            <h4 className="tech-label">Arquitectura & Lógica</h4>
            <p>{project.explicacionTecnica}</p>
          </div>

          <div className="modal-actions">
            {/* Botón 1: Repositorio de Código */}
            <a 
              href={project.codeUrl} 
              className="btn-code" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaCode /> Ver Código
            </a>

            {/* Botón 2: Playlist de Videos (Explicación) */}
            <a 
              href={project.videoPlaylistUrl} 
              className="btn-video" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaPlayCircle /> Explicación en Video
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;