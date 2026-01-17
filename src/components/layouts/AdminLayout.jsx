import React from 'react';
import { Outlet, Navigate, NavLink } from 'react-router-dom';
import '../../styles/AdminLayout.css';

const AdminLayout = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    // Redirección de seguridad si no hay sesión
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <div className="admin-container">
            {/* Sidebar Lateral */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">{'>'} SYSTEM_ADMIN</div>
                    <div className="sidebar-user">
                        <span>STATUS: ONLINE</span><br/>
                        <span>USER: {user?.username}</span>
                    </div>
                </div>
                
                <nav className="admin-nav">
                    <ul>
                        <li>
                            <NavLink 
                                to="/admin/dashboard" 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                📊 DASHBOARD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin/edit-projects" 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                💼 PROJECTS_MANAGER
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin/edit-experience" 
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                ⏳ EXP_TIMELINE
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <button className="logout-btn" onClick={handleLogout}>
                    TERMINATE_SESSION
                </button>
            </aside>

            {/* Área de Contenido Principal */}
            <main className="admin-main">
                <section className="admin-content-card">
                    {/* Aquí se inyectan Dashboard, Proyectos, etc. */}
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default AdminLayout;