import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import Navbar from './Navbar';
const Login = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // Estado para ver/ocultar
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, userAns: '' });
  const [status, setStatus] = useState('');

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
    console.log("Login con:", formData);
    setStatus('loading');
  };

  return (
    <section className="login-section">
            <Navbar />

      <div className="login-card">
        <div className="card-header">
          <div className="header-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="header-title">auth_session.py</span>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Admin Access</h2>
          
          {/* Acepta Email o Username */}
          <div className="input-group">
            <label>User or Email</label>
            <input 
              type="text" 
              placeholder="admin / admin@example.com" 
              required 
              onChange={(e) => setFormData({...formData, identifier: e.target.value})}
            />
          </div>

          {/* Password con botón de visibilidad */}
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                required 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  /* Icono Ojo Tachado */
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  /* Icono Ojo Abierto */
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="captcha-container">
            <label className="captcha-label">Human Check</label>
            <div className="captcha-box">
              <span className="math-text">{captcha.a} + {captcha.b} = </span>
              <input 
                type="number" 
                value={captcha.userAns}
                onChange={(e) => setCaptcha({...captcha, userAns: e.target.value})}
                placeholder="?"
                required
              />
            </div>
          </div>

          <button type="submit" className="login-btn">
            {status === 'loading' ? 'AUTHENTICATING...' : 'ACCESS_SYSTEM'}
          </button>

          {status === 'error-captcha' && <p className="msg error">Captcha incorrecto.</p>}
        </form>
      </div>
    </section>
  );
};

export default Login;