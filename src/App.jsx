import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// --- COMPONENTES PÚBLICOS ---
import Home from "./components/Content";
import Proyectos from "./components/Projects";
import Experiencia from "./components/Experiencia";
import Formacion from "./components/Formacion";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

// --- COMPONENTES DE ADMINISTRACIÓN ---
import AdminLayout from "./components/layouts/AdminLayout";
import ProjectManager from "./components/admin/ProjectManager";
import ExperienceManager from "./components/admin/ExperienceManager";
import CertificateManager from "./components/admin/CertificateManager";
import UserManager from "./components/admin/UserManager";
import Dashboard from "./components/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* --- RUTAS PÚBLICAS --- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Proyectos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* --- RUTAS DE ADMINISTRACIÓN (PROTEGIDAS) --- */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Redirección automática de /admin a /admin/dashboard */}
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            
            {/* Secciones del Panel */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="edit-projects" element={<ProjectManager />} />
            <Route path="edit-experience" element={<ExperienceManager />} />
            <Route path="edit-certificates" element={<CertificateManager />} />
            <Route path="edit-users" element={<UserManager />} />
          </Route>

          {/* --- 404 NOT FOUND --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;