import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectModal } from "../components/UI/ProjectModal";
import { useProjects } from "../hooks/useProjects"; 
import Navbar from "./Navbar";
import "../styles/proyects.css";

//IMPORTANTE LA CARGA DE PROYECTOS DESDE EL HOOK PARA EVITAR ERRORES DE VITE 
//CON ARCHIVOS JSON ES DECIR HOOKS/USEPROJECTS.JS EN LUGAR DE PROYECTOS.JSON
const Projects = () => {
  const {
    proyectosFiltrados,
    categoriasUnicas,
    categoriaFiltro,
    setCategoriaFiltro,
    selectedProject,
    setSelectedProject
  } = useProjects();

  return (
    <div className="projects-page">
      <Navbar />
      <Container className="projects-container">
        <header className="projects-header">
          <div className="hero-badge">PORTFOLIO TÉCNICO</div>
          <h1 className="projects-title">projects.<span>map()</span></h1>
          <p className="projects-subtitle">Análisis técnico y demostraciones de mis proyectos.</p>
          
          <div className="filter-wrapper">
            {categoriasUnicas.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${categoriaFiltro === cat ? 'active' : ''}`}
                onClick={() => setCategoriaFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <Row className="g-4">
          {proyectosFiltrados.map(proyecto => (
            <Col key={proyecto.id} lg={4} md={6}>
              <div className="project-glass-card" onClick={() => setSelectedProject(proyecto)}>
                <div className="card-image-box">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <div className="card-overlay"><span>DETALLES TÉCNICOS</span></div>
                </div>
                <div className="card-info">
                  <span className="project-category">{proyecto.categoria}</span>
                  <h3 className="card-project-title">{proyecto.nombre}</h3>
                  <div className="tech-dots">
                    {proyecto.tecnologias?.map((t, i) => (
                      <span key={i} title={t.name}>{t.icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <ProjectModal 
        show={!!selectedProject} 
        onHide={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </div>
  );
};

export default Projects;