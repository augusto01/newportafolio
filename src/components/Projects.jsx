import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PillNav from "./UI/PillNav";
import Logo from "./UI/Logo";
import ProjectModal from "../components/UI/ProjectModal";
import Navbar from "./Navbar";
import "../styles/proyects.css";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

 

  const [proyectos] = useState([
  {
    id: 1,
    nombre: "E-commerce Tech-Flow",
    descripcion: "Plataforma de comercio electrónico con sistema de pagos integrado y panel de administración.",
    explicacionTecnica: "Implementación de arquitectura escalable utilizando MERN Stack. Se utilizó Redux Toolkit para el manejo de estados globales y Stripe API para la pasarela de pagos segura. El backend cuenta con validación de JWT en cada endpoint protegido.",
    categoria: "Desarrollo Web",
    tecnologias: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    // Array para el carrusel
    imagenes: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
    ],
    imagen: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    codeUrl: "https://github.com/usuario/ecommerce-repo",
    videoPlaylistUrl: "https://youtube.com/playlist?list=PL_EXAMPLE1"
  },
  {
    id: 2,
    nombre: "Task Master Pro",
    descripcion: "Aplicación de gestión de tareas en tiempo real enfocada en la productividad de equipos remotos.",
    explicacionTecnica: "Desarrollado con WebSockets (Socket.io) para la sincronización instantánea entre usuarios. La persistencia se maneja en MongoDB con un esquema optimizado para consultas rápidas de estados de tareas y asignaciones.",
    categoria: "Desarrollo Fullstack",
    tecnologias: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Socket.io", icon: <SiNodedotjs /> } 
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1200&q=80"
    ],
    imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    codeUrl: "https://github.com/usuario/taskmaster-repo",
    videoPlaylistUrl: "https://youtube.com/playlist?list=PL_EXAMPLE2"
  },
  {
    id: 3,
    nombre: "Analytics Dashboard",
    descripcion: "Panel de control financiero para visualizar métricas de criptomonedas en tiempo real.",
    explicacionTecnica: "Consumo de múltiples APIs REST para obtención de datos. Se utilizó Chart.js para las gráficas dinámicas y una capa de caché en el cliente para reducir el número de peticiones innecesarias al servidor.",
    categoria: "Data Visualization",
    tecnologias: [
      { name: "React", icon: <SiReact /> },
      { name: "Chart.js", icon: <SiReact /> },
      { name: "CSS3", icon: <SiReact /> }
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80"
    ],
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    codeUrl: "https://github.com/usuario/dashboard-repo",
    videoPlaylistUrl: "https://youtube.com/playlist?list=PL_EXAMPLE3"
  },
  {
    id: 4,
    nombre: "Health Connect App",
    descripcion: "Plataforma de telemedicina que conecta pacientes con especialistas de forma segura.",
    explicacionTecnica: "Foco en la seguridad de datos (HIPAA compliance). Implementación de sistema de citas mediante un motor de calendario personalizado y almacenamiento de archivos (recetas) en AWS S3.",
    categoria: "Desarrollo Web",
    tecnologias: [
      { name: "React", icon: <SiReact /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "AWS S3", icon: <SiNodedotjs /> }
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505751172107-573225a94501?auto=format&fit=crop&w=1200&q=80"
    ],
    imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    codeUrl: "https://github.com/usuario/healthapp-repo",
    videoPlaylistUrl: "https://youtube.com/playlist?list=PL_EXAMPLE4"
  }
]);

  const categoriasUnicas = ["Todas", ...new Set(proyectos.map(p => p.categoria))];
  const proyectosFiltrados = categoriaFiltro === "Todas" 
    ? proyectos 
    : proyectos.filter(p => p.categoria === categoriaFiltro);

  return (
    <div className="projects-page">
      <Navbar></Navbar>

      <Container className="projects-container">
        {/* NUEVA SECCIÓN: HERO INTRO PARA RECLUTADORES */}
        <header className="projects-header">
          <div className="hero-badge">PORTFOLIO TÉCNICO</div>
          <h1 className="projects-title">projects.<span>map()</span></h1>
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