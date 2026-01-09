import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PillNav from "./UI/PillNav";
import Logo from "./UI/Logo";
import ProjectModal from "../components/UI/ProjectModal";
import "../styles/proyects.css";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  const NAV_ITEMS = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mi', href: '/about' },
    { label: 'Experiencia', href: '/experiencia' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Contacto', href: '/contact' }
  ];

  const [proyectos] = useState([
    {
      id: 1,
      nombre: "E-commerce React",
      descripcion: "Una tienda online completa con carrito de compras y pasarela de pago.",
      explicacionTecnica: "Implementación de arquitectura limpia con hooks personalizados y Context API.",
      categoria: "Desarrollo Web",
      tecnologias: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      codeUrl: "#",
      demoUrl: "#" // Asegúrate de tener este campo para el botón de demo
    }
  ]);

  const categoriasUnicas = ["Todas", ...new Set(proyectos.map(p => p.categoria))];
  const proyectosFiltrados = categoriaFiltro === "Todas" 
    ? proyectos 
    : proyectos.filter(p => p.categoria === categoriaFiltro);

  return (
    <div className="projects-page">
      <PillNav
        logo={<Logo />}
        items={NAV_ITEMS}
        activeHref="/projects"   
        baseColor="#05021b"
        pillTextColor="#757570"
        pillColor="#05021b"
        hoveredPillTextColor="#7CFF00"
      />

      <Container className="projects-container">
        {/* NUEVA SECCIÓN: HERO INTRO PARA RECLUTADORES */}
        <header className="projects-header">
          <div className="hero-badge">PORTFOLIO TÉCNICO</div>
          <h1 className="projects-title">Proyectos.<span>map()</span></h1>
          <p className="projects-subtitle">
            Explora una selección de mis trabajos más recientes. Cada proyecto incluye una 
            <strong> explicación técnica detallada</strong> sobre arquitectura, resolución de problemas 
            y stack utilizado, demostrando mi capacidad para construir soluciones escalables y eficientes.
          </p>
          
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
                  <div className="card-overlay">
                    <span>ANALIZAR CÓDIGO</span>
                  </div>
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