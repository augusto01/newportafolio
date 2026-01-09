import React from "react";
import { Modal } from "react-bootstrap";
import { FaCode, FaExternalLinkAlt, FaRocket, FaTimes } from "react-icons/fa";
import "../../styles/ProjectModal.css"; // IMPORTANTE: Importar el nuevo CSS

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

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
        <img 
          src={project.imagen} 
          alt={project.nombre} 
          className="modal-top-img" 
        />
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
            <a href={project.codeUrl} className="btn-code" target="_blank" rel="noopener noreferrer">
              <FaCode /> Código
            </a>
           {/* Botón de Código */}
                <a href={project.codeUrl} className="btn-code" target="_blank" rel="noopener noreferrer">
                    <FaCode /> Explicación del Código
                </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;