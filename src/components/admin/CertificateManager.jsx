import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const CertificateManager = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    issueDate: '',
    link: '',
    credentialId: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await api.get('/certificados'); // Ajusta según tu ruta de backend
      setCertificates(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error al cargar certificados", err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/certificados/${editId}`, formData);
      } else {
        await api.post('/certificados', formData);
      }
      setFormData({ title: '', organization: '', issueDate: '', link: '', credentialId: '' });
      setEditId(null);
      fetchCertificates();
    } catch (err) {
      alert("Error al procesar la solicitud");
    }
  };

  const handleEdit = (cert) => {
    setEditId(cert._id);
    setFormData({
      title: cert.title,
      organization: cert.organization,
      issueDate: cert.issueDate.split('T')[0], // Formatea fecha para input date
      link: cert.link,
      credentialId: cert.credentialId
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Deseas eliminar permanentemente este certificado?')) {
      try {
        await api.delete(`/certificados/${id}`);
        fetchCertificates();
      } catch (err) {
        alert("No se pudo eliminar");
      }
    }
  };

  return (
    <div className="admin-module">
      <header className="module-header">
        <h2>{'>'} CERTIFICATE_REPOSITORY</h2>
        <p>Gestión de credenciales académicas y cursos.</p>
      </header>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          <div className="input-group">
            <label>Título del Certificado</label>
            <input 
              type="text" 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
              placeholder="Ej: Full Stack Web Development" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Organización Emisora</label>
            <input 
              type="text" 
              value={formData.organization} 
              onChange={e => setFormData({...formData, organization: e.target.value})} 
              placeholder="Ej: Udemy, Coursera, Universidad" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Fecha de Emisión</label>
            <input 
              type="date" 
              value={formData.issueDate} 
              onChange={e => setFormData({...formData, issueDate: e.target.value})} 
            />
          </div>
          <div className="input-group">
            <label>URL de Credencial</label>
            <input 
              type="url" 
              value={formData.link} 
              onChange={e => setFormData({...formData, link: e.target.value})} 
              placeholder="https://..." 
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="login-btn">
            {editId ? 'UPDATE_CERTIFICATE' : 'SAVE_NEW_CERTIFICATE'}
          </button>
          {editId && (
            <button type="button" className="logout-btn" onClick={() => {setEditId(null); setFormData({title:'', organization:'', issueDate:'', link:'', credentialId:''})}}>
              CANCEL_EDIT
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p>Syncing with database...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Emisor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map(cert => (
              <tr key={cert._id}>
                <td>{cert.title}</td>
                <td>{cert.organization}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(cert)}>EDIT</button>
                  <button className="btn-delete" onClick={() => handleDelete(cert._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CertificateManager;