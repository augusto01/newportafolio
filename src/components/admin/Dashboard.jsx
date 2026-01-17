import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    certificates: 0,
    users: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Hacemos peticiones en paralelo para obtener los totales
        const [proj, exp, cert, user] = await Promise.all([
          api.get('/proyectos'),
          api.get('/experiencia'),
          api.get('/certificados'),
          api.get('/users')
        ]);

        setStats({
          projects: proj.data.length,
          experience: exp.data.length,
          certificates: cert.data.length,
          users: user.data.length
        });
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar estadísticas", err);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: 'TOTAL_PROJECTS', count: stats.projects, path: '/admin/edit-projects', color: '#00ff41' },
    { title: 'EXP_ENTRIES', count: stats.experience, path: '/admin/edit-experience', color: '#00d2ff' },
    { title: 'CERTIFICATIONS', count: stats.certificates, path: '/admin/edit-certificates', color: '#ffcc00' },
    { title: 'ADMIN_USERS', count: stats.users, path: '/admin/edit-users', color: '#ff4b2b' },
  ];

  return (
    <div className="admin-dashboard">
      <header className="module-header">
        <h2>{'>'} SYSTEM_DIAGNOSTICS</h2>
        <p>Bienvenido al núcleo de control de tu Portfolio.</p>
      </header>

      {loading ? (
        <div className="loading-scanner">SCANNING_DATABASE...</div>
      ) : (
        <div className="stats-grid">
          {statCards.map((card, index) => (
            <div key={index} className="stat-card" style={{ borderLeftColor: card.color }}>
              <span className="stat-title">{card.title}</span>
              <span className="stat-count">{card.count}</span>
              <Link to={card.path} className="stat-link">MANAGE_DATA _</Link>
            </div>
          ))}
        </div>
      )}

      <div className="dashboard-footer">
        <div className="system-log">
          <h3>{'>'} RECENT_ACTIVITY_LOG</h3>
          <ul>
            <li>[INFO] System initialized at {new Date().toLocaleTimeString()}</li>
            <li>[INFO] Connection to MongoDB established.</li>
            <li>[INFO] Authentication layer active.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;