import React, { useState, useEffect } from 'react';
import '../../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', proposal: '' });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, userAns: '' });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error-captcha', 'error-server'

  // Generar reto matemático
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validar Captcha Local
    if (parseInt(captcha.userAns) !== captcha.a + captcha.b) {
      setStatus('error-captcha');
      return;
    }

    setStatus('loading');

    // 2. Enviar a Formspree
    try {
      const response = await fetch("https://formspree.io/f/xgegjvvb", { // <--- REEMPLAZA TU_FORM_ID AQUÍ
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.proposal // Formspree suele esperar un campo 'message'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', proposal: '' });
        setCaptcha({ ...captcha, userAns: '' });
      } else {
        setStatus('error-server');
      }
    } catch (error) {
      setStatus('error-server');
    }
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
              value={formData.name}
              placeholder="¿Cómo te llamas?" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={formData.email}
              placeholder="tu@email.com" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label>Proposal</label>
            <textarea 
              value={formData.proposal}
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

          <button 
            type="submit" 
            className={`send-btn ${status === 'success' ? 'btn-success' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'SENDING...' : status === 'success' ? 'SENT SUCCESSFULLY' : 'ENVIAR'}
          </button>

          {status === 'error-captcha' && <p className="msg error">Captcha incorrecto. Inténtalo de nuevo.</p>}
          {status === 'error-server' && <p className="msg error">Hubo un error al enviar. Intenta más tarde.</p>}
          {status === 'success' && <p className="msg success">¡Propuesta recibida! Te contactaré pronto.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;