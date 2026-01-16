import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Icono SVG reutilizable
  const LoginIcon = () => (
    <svg className="login-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <nav className="navbar">
      <div className="nav-container-grid">
        
        {/* COLUMNA 1 (10%): LOGO */}
        <div className="nav-column left">
          <NavLink to="/" className="logo-container" onClick={() => setIsMobile(false)}>
            <div className="logo-wrapper">
              <span className="logo-letter">A</span>
              <span className="logo-exponent">2</span>
            </div>
          </NavLink>
        </div>

        {/* COLUMNA 2 (80%): LINKS + LOGIN (Móvil) */}
        <div className={`nav-column center ${isMobile ? "mobile-open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobile(false)}>
                sobre mi
              </NavLink>
            </li>
            <li>
              <NavLink to="/experiencia" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobile(false)}>
                experiencia
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobile(false)}>
                proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/formacion" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobile(false)}>
                certificados
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobile(false)}>
                Contactame
              </NavLink>
            </li>
            
            {/* Login móvil (dentro del dropdown) */}
            <li className="mobile-only-item">
              <NavLink to="/login" className="login-link-minimal" onClick={() => setIsMobile(false)}>
                <LoginIcon />
                <span>Iniciar sesión</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 (10%): LOGIN DESKTOP / HAMBURGUESA */}
        <div className="nav-column right">
          <div className="desktop-only-wrapper">
            <NavLink to="/login" className="login-link-minimal">
              <LoginIcon />
              <span>Iniciar sesión</span>
            </NavLink>
          </div>
                  
          <button className="mobile-toggle" onClick={() => setIsMobile(!isMobile)} aria-label="Abrir menú">
            <span className={isMobile ? "bar bar-top open" : "bar bar-top"}></span>
            <span className={isMobile ? "bar bar-bot open" : "bar bar-bot"}></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;