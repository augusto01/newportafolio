import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LOGO */}
       <div className="nav-brand">
          <NavLink to="/" className="logo-container" onClick={closeMenu}>
            <div className="logo-wrapper">
              <span className="logo-letter">A</span>
              <span className="logo-exponent">2</span>
            </div>
          </NavLink>
        </div>

        {/* NAVEGACIÓN */}
        <div className={`nav-menu-wrapper ${isMobile ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/about" onClick={closeMenu}>sobre mí</NavLink></li>
            <li><NavLink to="/experiencia" onClick={closeMenu}>experiencia</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>proyectos</NavLink></li>
            <li><NavLink to="/formacion" onClick={closeMenu}>educación</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>contacto</NavLink></li>
            <li className="mobile-only">
              <NavLink to="/login" className="login-btn-mobile" onClick={closeMenu}>acceder</NavLink>
            </li>
          </ul>
        </div>

        {/* ACCIONES DESKTOP & TOGGLE */}
        <div className="nav-actions">
          <NavLink to="/login" className="login-btn-desktop">
            acceder
          </NavLink>
          
          <button className={`menu-toggle ${isMobile ? "active" : ""}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;