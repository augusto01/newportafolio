import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '', // Opcional para edición
    nombre: '',
    apellido: '',
    tituloProfesional: '',
    bio: '',
    celular: '',
    redesSociales: {
      linkedin: '',
      github: '',
      instagram: '',
      twitter: ''
    }
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users'); // Ruta para obtener lista de admins
      setUsers(res.data);
    } catch (err) {
      console.error("Error al cargar usuarios", err);
    }
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      redesSociales: {
        ...formData.redesSociales,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setFormData({
      username: user.username,
      email: user.email,
      password: '', // No cargamos la contraseña por seguridad
      nombre: user.nombre || '',
      apellido: user.apellido || '',
      tituloProfesional: user.tituloProfesional || '',
      bio: user.bio || '',
      celular: user.celular || '',
      redesSociales: {
        linkedin: user.redesSociales?.linkedin || '',
        github: user.redesSociales?.github || '',
        instagram: user.redesSociales?.instagram || '',
        twitter: user.redesSociales?.twitter || ''
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/users/${editId}`, formData);
        alert("Usuario actualizado correctamente");
      } else {
        await api.post('/auth/register', formData);
        alert("Nuevo administrador registrado");
      }
      setEditId(null);
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error en la operación");
    }
  };

  return (
    <div className="admin-module">
      <header className="module-header">
        <h2>{'>'} IDENTITY_MANAGEMENT</h2>
        <p>Configuración de perfil profesional y accesos.</p>
      </header>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          {/* Datos de Acceso */}
          <div className="input-group">
            <label>Username</label>
            <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
          </div>
          <div className="input-group">
            <label>Password {editId && "(dejar vacío para no cambiar)"}</label>
            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>

          {/* Datos Personales */}
          <div className="input-group">
            <label>Nombre</label>
            <input type="text" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} />
          </div>
          <div className="input-group">
            <label>Título Profesional</label>
            <input type="text" value={formData.tituloProfesional} onChange={e => setFormData({...formData, tituloProfesional: e.target.value})} />
          </div>

          {/* Redes Sociales */}
          <div className="input-group">
            <label>LinkedIn URL</label>
            <input type="text" name="linkedin" value={formData.redesSociales.linkedin} onChange={handleSocialChange} />
          </div>
          <div className="input-group">
            <label>GitHub URL</label>
            <input type="text" name="github" value={formData.redesSociales.github} onChange={handleSocialChange} />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Biografía Profesional</label>
          <textarea value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} rows="3" />
        </div>

        <div className="form-actions">
          <button type="submit" className="login-btn">
            {editId ? 'UPDATE_PROFILE' : 'REGISTER_NEW_ADMIN'}
          </button>
        </div>
      </form>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.activo ? 'ADMIN_ACTIVE' : 'DISABLED'}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(user)}>EDIT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager;