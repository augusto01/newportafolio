import React from 'react';
import '../styles/Contact.css'; // Asegúrate de crear este archivo o usar el de Content
import ContactForm from '../components/UI/ContactForm';
import PillNav from '../components/UI/PillNav';
import Logo from '../components/UI/Logo';

const Contact = () => {
  const NAV_ITEMS = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Mi', href: '/about' },
    { label: 'Experiencia', href: '/experiencia' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Formación', href: '/formacion' },
    { label: 'Contacto', href: '/contact' }
  ];

  return (
    <div className="contact-page-container">
      {/* Navegación consistente */}
      <PillNav
        logo={<Logo />}
        items={NAV_ITEMS}
        activeHref="/contact"
        baseColor="#05021b"
        pillTextColor="#757570"
        pillColor="#05021b"
        hoveredPillTextColor="#7CFF00"
      />

      <main className="contact-main-content">
        <header className="contact-header">
          <h1 className="contact-title">Contact.<span>init()</span></h1>
          <p className="contact-subtitle">
            ¿Tienes una propuesta o quieres colaborar? Envíame un mensaje directo.
          </p>
        </header>

        <div className="form-wrapper">
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default Contact;