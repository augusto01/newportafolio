import React from 'react';
import '../styles/Contact.css'; 
import ContactForm from '../components/UI/ContactForm';
import PillNav from '../components/UI/PillNav';
import Logo from '../components/UI/Logo';

const Contact = () => {
        <Navbar />


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
          <h1 className="contact-title">contact.<span>init()</span></h1>
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