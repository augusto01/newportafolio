import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import { FaCode, FaPlayCircle, FaRocket, FaTimes, FaPlay } from "react-icons/fa";
import "../../styles/ProjectModal.css"; 

// Usamos exportación nombrada para evitar errores de detección de Vite
export const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

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
        
        <Carousel 
          interval={3500} 
          indicators={images.length > 1} 
          controls={images.length > 1}
        >
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img 
                src={img} 
                alt={`Slide ${idx}`} 
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
          
          <div className="technical-brief">
            <h4 className="tech-label">Arquitectura & Lógica</h4>
            <p>{project.explicacionTecnica}</p>
          </div>

          {project.desgloseVideos && (
            <div className="video-breakdown-section">
              <h4 className="tech-label">Contenido de la Playlist</h4>
              <div className="video-list">
                {project.desgloseVideos.map((vid, idx) => (
                  <div key={idx} className="video-item">
                    <div className="video-index">0{idx + 1}</div>
                    <div className="video-info">
                      <span className="video-title">{vid.titulo}</span>
                      <p className="video-desc">{vid.descripcion}</p>
                    </div>
                    <a 
                      href={vid.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="video-link-small"
                    >
                      <FaPlay />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            <a 
              href={project.codeUrl} 
              className="btn-code" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaCode /> Repositorio
            </a>
            <a 
              href={project.videoPlaylistUrl} 
              className="btn-video" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaPlayCircle /> Ver Playlist
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};