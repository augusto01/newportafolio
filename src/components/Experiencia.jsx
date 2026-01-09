import React from 'react';
import '../styles/Experiencia.css';
import PillNav from './UI/PillNav';
import Logo from './UI/Logo';

const Experiencia = () => {
  // Datos de prueba para que los edites
  const experiencias = [
    {
      empresa: "Tech Solutions Inc.",
      puesto: "Desarrollador Full Stack Senior",
      periodo: "2023 - Presente",
      descripcion: "Liderazgo en el desarrollo de microservicios utilizando Node.js y React. Optimización de consultas MongoDB reduciendo tiempos de respuesta en un 40%.",
      tecnologias: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      empresa: "Global Software Factory",
      puesto: "Frontend Developer",
      periodo: "2021 - 2023",
      descripcion: "Desarrollo de interfaces de usuario modernas y responsivas. Implementación de sistemas de diseño escalables y testing con Jest.",
      tecnologias: ["JavaScript", "TypeScript", "Next.js", "SASS"]
    }
  ];

  return (
    <div className="experiencia-page">
      <PillNav
        logo={<Logo />}
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Sobre Mi', href: '/about' },
          { label: 'Experiencia', href: '/experiencia' },
          { label: 'Proyectos', href: '/projects' },
          { label: 'Contacto', href: '/contact' }
        ]}
        activeHref="/experiencia"   
        baseColor="#05021b"
        pillTextColor="#757570"
        pillColor="#05021b"
        hoveredPillTextColor="#7CFF00"
      />

      <main className="experiencia-content">
        <header className="exp-header">
          <h1 className="exp-title">Trayectoria.<span>log()</span></h1>
          <p className="exp-subtitle">Mi recorrido profesional y proyectos clave.</p>
        </header>

        <div className="timeline-container">
          {experiencias.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="exp-card">
                <span className="exp-date">{item.periodo}</span>
                <h3 className="exp-role">{item.puesto}</h3>
                <h4 className="exp-company">{item.empresa}</h4>
                <p className="exp-desc">{item.descripcion}</p>
                <div className="exp-techs">
                  {item.tecnologias.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Experiencia;