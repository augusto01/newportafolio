import React, { useState, useEffect } from 'react';
import '../../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', proposal: '' });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, userAns: '' });
  const [status, setStatus] = useState('');

  // Generar un reto matemático simple al cargar
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
      userAns: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captcha.userAns) !== captcha.a + captcha.b) {
      setStatus('error-captcha');
      return;
    }
    // Aquí iría tu lógica de envío (EmailJS, Formspree, etc.)
    setStatus('success');
    console.log("Propuesta enviada:", formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="card-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="header-title">new_proposal.js</span>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="¿Cómo te llamas?" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Proposal</label>
            <textarea 
              placeholder="Cuéntame sobre tu proyecto o propuesta..." 
              required 
              onChange={(e) => setFormData({...formData, proposal: e.target.value})}
            ></textarea>
          </div>

          <div className="captcha-container">
            <label className="captcha-label">Human Verification:</label>
            <div className="captcha-box">
              <span>{captcha.a} + {captcha.b} = </span>
              <input 
                type="number" 
                value={captcha.userAns}
                onChange={(e) => setCaptcha({...captcha, userAns: e.target.value})}
                placeholder="?"
                required
              />
            </div>
          </div>

          <button type="submit" className="send-btn">
            {status === 'success' ? 'SENT SUCCESSFULLY' : 'ENVIAR'}
          </button>

          {status === 'error-captcha' && <p className="msg error">Captcha incorrecto. Inténtalo de nuevo.</p>}
          {status === 'success' && <p className="msg success">¡Propuesta recibida! Te contactaré pronto.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;