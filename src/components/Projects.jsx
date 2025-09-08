import React, { useState } from "react";
import { Card, Button, Row, Col, Badge, Container } from "react-bootstrap";
import "../styles/proyects.css";

const Projects = () => {
  // Datos estáticos de proyectos
  const [proyectos] = useState([
    {
      id: 1,
      nombre: "E-commerce React",
      descripcion: "Una tienda online completa con carrito de compras, pasarela de pago y panel de administración.",
      categoria: "Desarrollo Web",
      tecnologias: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
      imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "#"
    },
    {
      id: 2,
      nombre: "App de Tareas",
      descripcion: "Aplicación para gestión de tareas diarias con recordatorios y categorías.",
      categoria: "Productividad",
      tecnologias: ["React Native", "Firebase", "Redux", "CSS Modules"],
      imagen: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
      url: "#"
    },
    {
      id: 3,
      nombre: "Dashboard Analytics",
      descripcion: "Panel de control para visualización de datos y métricas empresariales.",
      categoria: "Análisis de Datos",
      tecnologias: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "#"
    },
    {
      id: 4,
      nombre: "Red Social Educativa",
      descripcion: "Plataforma para conectar estudiantes y profesores con recursos educativos.",
      categoria: "Educación",
      tecnologias: ["Vue.js", "Laravel", "MySQL", "WebSockets", "Tailwind CSS"],
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      url: "#"
    }
  ]);

  // Categorías únicas para el filtrado
  const categoriasUnicas = [...new Set(proyectos.map(proyecto => proyecto.categoria))];
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  // Filtrar proyectos según la categoría seleccionada
  const proyectosFiltrados = categoriaFiltro === "Todas" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === categoriaFiltro);

  return (
    <Container className="proyectos-container my-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <p className="text-center text-muted mb-5">
        Explora algunos de mis trabajos más recientes y las tecnologías utilizadas en cada uno de ellos.
      </p>
      
      {/* Filtros por categoría */}
      <div className="text-center mb-4">
        <Badge 
          bg={categoriaFiltro === "Todas" ? "primary" : "light"} 
          text={categoriaFiltro === "Todas" ? "white" : "dark"}
          className="me-2 mb-2 filter-badge"
          onClick={() => setCategoriaFiltro("Todas")}
        >
          Todas
        </Badge>
        {categoriasUnicas.map((categoria, index) => (
          <Badge 
            key={index}
            bg={categoriaFiltro === categoria ? "primary" : "light"} 
            text={categoriaFiltro === categoria ? "white" : "dark"}
            className="me-2 mb-2 filter-badge"
            onClick={() => setCategoriaFiltro(categoria)}
          >
            {categoria}
          </Badge>
        ))}
      </div>
      
      {/* Grid de proyectos */}
      <Row>
        {proyectosFiltrados.map(proyecto => (
          <Col key={proyecto.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 proyecto-card">
              <div className="image-container">
                <Card.Img variant="top" src={proyecto.imagen} />
                <div className="categoria-badge">{proyecto.categoria}</div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proyecto.nombre}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                
                <div className="tecnologias-container mt-auto">
                  <h6>Tecnologías utilizadas:</h6>
                  <div className="tecnologias-list">
                    {proyecto.tecnologias.map((tech, index) => (
                      <Badge key={index} bg="secondary" className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="primary" className="mt-3">Ver detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;