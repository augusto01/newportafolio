import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import '../../styles/ABM_general.css';

const ExperienceManager = () => {
    const [exps, setExps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [techList, setTechList] = useState([]);
    const [esActual, setEsActual] = useState(false);
    const [isEditing, setIsEditing] = useState(null); 
    const [notification, setNotification] = useState({ show: false, msg: '', type: '' });

    const [form, setForm] = useState({ 
        empresa: '', puesto: '', fechaInicio: '', 
        fechaFin: '', tecnologias: [], descripcion: '' 
    });

    useEffect(() => { 
        fetchExps();
        setTechList(["React", "Node.js", "MongoDB", "Express", "TypeScript", "Docker", "AWS", "Python", "SQL", "Tailwind"].sort());
    }, []);

    // Formatea de YYYY-MM-DD a DD-MM-YYYY para la tabla
    const displayDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month, day] = dateStr.split('T')[0].split('-');
        return `${day}-${month}-${year}`;
    };

    // Mantiene el formato YYYY-MM-DD necesario para los inputs tipo date
    const inputDate = (dateStr) => {
        if (!dateStr) return "";
        return dateStr.split('T')[0];
    };

    const showNotify = (msg, type = 'success') => {
        setNotification({ show: true, msg, type });
        setTimeout(() => setNotification({ show: false, msg: '', type: '' }), 3000);
    };

    const fetchExps = async () => {
        try {
            const res = await api.get('/experiencia');
            const sorted = res.data.sort((a, b) => new Date(b.fechaInicio) - new Date(a.fechaInicio));
            setExps(sorted);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    const handleTechSelect = (e) => {
        const val = e.target.value;
        if (val && !form.tecnologias.includes(val)) {
            setForm({ ...form, tecnologias: [...form.tecnologias, val] });
        }
    };

    const removeTech = (t) => setForm({ ...form, tecnologias: form.tecnologias.filter(item => item !== t) });

    const onSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = { ...form, actual: esActual, fechaFin: esActual ? "" : form.fechaFin };

        try {
            if (isEditing) {
                await api.put(`/experiencia/${isEditing}`, dataToSend);
                showNotify("REGISTRO_ACTUALIZADO");
            } else {
                await api.post('/experiencia', dataToSend);
                showNotify("REGISTRO_CREADO");
            }
            resetForm();
            fetchExps();
        } catch (err) {
            showNotify("ERROR_SISTEMA", "error");
        }
    };

    const resetForm = () => {
        setForm({ empresa: '', puesto: '', fechaInicio: '', fechaFin: '', tecnologias: [], descripcion: '' });
        setEsActual(false);
        setIsEditing(null);
    };

    const handleEdit = (exp) => {
        setIsEditing(exp._id);
        setForm({
            empresa: exp.empresa,
            puesto: exp.puesto,
            fechaInicio: inputDate(exp.fechaInicio),
            fechaFin: inputDate(exp.fechaFin),
            tecnologias: exp.tecnologias,
            descripcion: exp.descripcion
        });
        setEsActual(exp.actual);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿ELIMINAR_REGISTRO?')) {
            try {
                await api.delete(`/experiencia/${id}`);
                fetchExps();
                showNotify("REGISTRO_BORRADO", "error");
            } catch (err) {
                showNotify("ERROR_AL_BORRAR", "error");
            }
        }
    };

    return (
        <div className="admin-module full-screen">
            {notification.show && (
                <div className={`notification-toast ${notification.type}`}>{notification.msg}</div>
            )}

            <header className="module-header">
                <h2>{'>'} {isEditing ? 'EDITAR EXPERIENCIA' : 'NUEVA EXPERIENCIA'}</h2>
            </header>

            <form onSubmit={onSubmit} className="admin-form full-width-form">
                <div className="form-grid-wide">
                    <div className="input-group">
                        <label>Empresa</label>
                        <input type="text" value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} required />
                    </div>
                    <div className="input-group">
                        <label>Puesto</label>
                        <input type="text" value={form.puesto} onChange={e => setForm({...form, puesto: e.target.value})} required />
                    </div>
                    <div className="input-group">
                        <label>Desde</label>
                        <input type="date" className="calendar-input" value={form.fechaInicio} onChange={e => setForm({...form, fechaInicio: e.target.value})} required />
                    </div>
                    <div className="input-group">
                        <label>Hasta</label>
                        <input type="date" className="calendar-input" value={form.fechaFin} onChange={e => setForm({...form, fechaFin: e.target.value})} disabled={esActual} required={!esActual} />
                        <div className="checkbox-group">
                            <input type="checkbox" id="pres" checked={esActual} onChange={() => setEsActual(!esActual)} />
                            <label htmlFor="pres">Actualidad</label>
                        </div>
                    </div>
                </div>
                
                <div className="input-group full-width">
                    <label>Tecnologías</label>
                    <select className="custom-select" onChange={handleTechSelect} value="">
                        <option value="" disabled>Seleccionar Stack...</option>
                        {techList.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <div className="selected-techs-container">
                        {form.tecnologias.map(t => (
                            <span key={t} className="tech-tag-removable">
                                {t} <button type="button" onClick={() => removeTech(t)}>×</button>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="input-group full-width">
                    <label>Descripción</label>
                    <textarea value={form.descripcion} onChange={e => setForm({...form, descripcion: e.target.value})} rows="3" required />
                </div>

                <div className="form-actions">
                    <button type="submit" className="login-btn">{isEditing ? 'ACTUALIZAR' : 'GUARDAR'}</button>
                    {isEditing && <button type="button" className="btn-cancel" onClick={resetForm}>CANCELAR</button>}
                </div>
            </form>

            <div className="table-wrapper full-width-table">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Puesto</th>
                            <th className="desc-header">Descripción</th>
                            <th>Periodo (DD-MM-YYYY)</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exps.map(exp => (
                            <tr key={exp._id}>
                                <td><span className="empresa-text">{exp.empresa}</span></td>
                                <td>{exp.puesto}</td>
                                <td className="desc-cell-wide">{exp.descripcion}</td>
                                <td className="periodo-cell">
                                    <div className="date-block">
                                        <small>Desde:</small>
                                        <span className="date-tag">{displayDate(exp.fechaInicio)}</span>
                                    </div>
                                    <div className="date-block">
                                        <small>Hasta:</small>
                                        <span className={`date-tag ${exp.actual ? 'present-tag' : ''}`}>
                                            {exp.actual ? 'Presente' : displayDate(exp.fechaFin)}
                                        </span>
                                    </div>
                                </td>
                                <td className="actions-cell">
                                    <button onClick={() => handleEdit(exp)} className="btn-edit">EDITAR</button>
                                    <button onClick={() => handleDelete(exp._id)} className="btn-delete">ELIMINAR</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExperienceManager;