import React from 'react'
import '../styles/Experiencia.css'
import PillNav from './UI/PillNav'
import Logo from './UI/Logo'


const Experiencia = () => {

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
  className="custom-nav"
  ease="power2.out"
  baseColor="#05021b"
  pillTextColor="#757570"
  pillColor="#05021b"
  hoveredPillTextColor="#7CFF00"
/>


  

  <main className="experiencia-content">
    <h1>Experiencia</h1>
    <p>Aquí puedes detallar tu experiencia laboral.</p>
  </main>
</div>

    
  )
}

export default Experiencia