import { useState } from "react";
import { 
  SiReact, SiNodedotjs, SiMongodb, 
  SiSocketdotio, SiChartdotjs, SiJavascript 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  const [proyectos] = useState([
    {
      id: 1,
      nombre: "E-commerce Tech-Flow",
      descripcion: "Plataforma de comercio electrónico con sistema de pagos.",
      explicacionTecnica: "Stack MERN con Redux Toolkit para el estado global y Stripe para pagos.",
      categoria: "Desarrollo Web",
      tecnologias: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      imagenes: ["https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80"],
      imagen: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      codeUrl: "#",
      videoPlaylistUrl: "#",
      desgloseVideos: [{ titulo: "Arquitectura", descripcion: "Estructura de la App.", url: "#" }]
    },
    {
      id: 2,
      nombre: "Task Master Pro",
      descripcion: "Gestión de equipos en tiempo real.",
      explicacionTecnica: "Uso intensivo de WebSockets (Socket.io) para sincronización.",
      categoria: "Desarrollo Fullstack",
      tecnologias: [
        { name: "React", icon: <SiReact /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "Node.js", icon: <SiNodedotjs /> }
      ],
      imagenes: ["https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80"],
      imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      codeUrl: "#",
      videoPlaylistUrl: "#",
      desgloseVideos: [{ titulo: "WebSockets", descripcion: "Lógica real-time.", url: "#" }]
    },
    {
      id: 3,
      nombre: "Health Connect App",
      descripcion: "Telemedicina con almacenamiento seguro.",
      explicacionTecnica: "Integración con AWS S3 para manejo de documentos médicos.",
      categoria: "Desarrollo Web",
      tecnologias: [
        { name: "React", icon: <SiReact /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      imagenes: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"],
      imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      codeUrl: "#",
      videoPlaylistUrl: "#",
      desgloseVideos: [{ titulo: "S3 Upload", descripcion: "Manejo de archivos.", url: "#" }]
    },
    {
      id: 3,
      nombre: "Health Connect App",
      descripcion: "Telemedicina con almacenamiento seguro.",
      explicacionTecnica: "Integración con AWS S3 para manejo de documentos médicos.",
      categoria: "Desarrollo Web",
      tecnologias: [
        { name: "React", icon: <SiReact /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      imagenes: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"],
      imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      codeUrl: "#",
      videoPlaylistUrl: "#",
      desgloseVideos: [{ titulo: "S3 Upload", descripcion: "Manejo de archivos.", url: "#" }]
    }
  ]);

  const categoriasUnicas = ["Todas", ...new Set(proyectos.map(p => p.categoria))];
  
  const proyectosFiltrados = categoriaFiltro === "Todas" 
    ? proyectos 
    : proyectos.filter(p => p.categoria === categoriaFiltro);

  return {
    proyectosFiltrados,
    categoriasUnicas,
    categoriaFiltro,
    setCategoriaFiltro,
    selectedProject,
    setSelectedProject
  };
};