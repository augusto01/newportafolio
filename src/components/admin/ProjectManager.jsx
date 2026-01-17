import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ 
        title: '', 
        description: '', 
        tech: '', 
        link: '', 
        image: '', 
        codeExplanation: '' 
    });

    useEffect(() => { fetchProjects(); }, []);

    const fetchProjects = async () => {
        try {
            const res = await api.get('/proyectos');
            setProjects(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            console.error("Error:", err);
            setProjects([]);
        } finally { setLoading(false); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convertimos el string de tecnologías en un array antes de enviar
            const dataToSend = {
                ...formData,
                tech: formData.tech.split(',').map(t => t.trim())
            };
            await api.post('/proyectos', dataToSend);
            setFormData({ title: '', description: '', tech: '', link: '', image: '', codeExplanation: '' });
            fetchProjects();
        } catch (err) {
            alert("Error al guardar el proyecto");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Eliminar proyecto?')) {
            await api.delete(`/proyectos/${id}`);
            fetchProjects();
        }
    };

    return (
        <div className="admin-module">
            <h2>{'>'} PROJECT_DATABASE_MANAGER</h2>
            
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-grid">
                    <div className="input-group">
                        <label>Nombre del Proyecto</label>
                        <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                    </div>
                    <div className="input-group">
                        <label>Tecnologías (separadas por coma)</label>
                        <input type="text" placeholder="React, Node, MongoDB" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} required />
                    </div>
                    <div className="input-group">
                        <label>URL Imagen (Portada)</label>
                        <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
                    </div>
                    <div className="input-group">
                        <label>Link al Repositorio</label>
                        <input type="url" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} required />
                    </div>
                </div>

                <div className="input-group full-width">
                    <label>Descripción Breve</label>
                    <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows="2" required />
                </div>

                <div className="input-group full-width">
                    <label>Explicación del Código (Lógica principal)</label>
                    <textarea value={formData.codeExplanation} onChange={e => setFormData({...formData, codeExplanation: e.target.value})} rows="4" placeholder="Explica cómo funciona la arquitectura o fragmentos clave..." />
                </div>

                <button type="submit" className="login-btn">PUSH_TO_DATABASE</button>
            </form>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Proyecto</th>
                        <th>Tecnologías</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(p => (
                        <tr key={p._id}>
                            <td>{p.title}</td>
                            <td>{Array.isArray(p.tech) ? p.tech.join(', ') : p.tech}</td>
                            <td>
                                <button onClick={() => handleDelete(p._id)} className="btn-delete">DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectManager;