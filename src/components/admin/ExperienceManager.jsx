import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ExperienceManager = () => {
    const [exps, setExps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ 
        company: '', 
        role: '', 
        duration: '', 
        description: '' 
    });

    useEffect(() => { 
        fetchExps(); 
    }, []);

    const fetchExps = async () => {
        try {
            const res = await api.get('/experiencia');
            setExps(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error al cargar experiencias", err);
            setLoading(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/experiencia', form);
            // Limpiar formulario después de enviar
            setForm({ company: '', role: '', duration: '', description: '' });
            fetchExps();
        } catch (err) {
            alert("Error al guardar la experiencia");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Eliminar esta entrada de experiencia?')) {
            try {
                await api.delete(`/experiencia/${id}`);
                fetchExps();
            } catch (err) {
                alert("Error al eliminar");
            }
        }
    };

    return (
        <div className="admin-module">
            <header className="module-header">
                <h2>{'>'} EXPERIENCE_TIMELINE</h2>
                <p>Gestiona tu historial laboral y profesional.</p>
            </header>

            <form onSubmit={onSubmit} className="admin-form">
                <div className="form-grid">
                    <div className="input-group">
                        <label>Empresa / Organización</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Google, Freelance" 
                            value={form.company}
                            onChange={e => setForm({...form, company: e.target.value})} 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Puesto / Rol</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Full Stack Developer" 
                            value={form.role}
                            onChange={e => setForm({...form, role: e.target.value})} 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Duración</label>
                        <input 
                            type="text" 
                            placeholder="Ej: Ene 2022 - Presente" 
                            value={form.duration}
                            onChange={e => setForm({...form, duration: e.target.value})} 
                            required
                        />
                    </div>
                </div>
                <div className="input-group full-width">
                    <label>Descripción de tareas</label>
                    <textarea 
                        placeholder="Describe tus logros y tecnologías usadas..."
                        value={form.description}
                        onChange={e => setForm({...form, description: e.target.value})}
                        rows="3"
                    />
                </div>
                <button type="submit" className="login-btn">SAVE_EXPERIENCE</button>
            </form>

            {loading ? (
                <p className="loading-scanner">FETCHING_HISTORY...</p>
            ) : (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Puesto</th>
                            <th>Duración</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exps.length > 0 ? (
                            exps.map(exp => (
                                <tr key={exp._id}>
                                    <td>{exp.company}</td>
                                    <td>{exp.role}</td>
                                    <td>{exp.duration}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(exp._id)} 
                                            className="btn-delete"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{textAlign: 'center'}}>No hay registros encontrados.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ExperienceManager;