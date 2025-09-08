import React from 'react';
import '../styles/Content.css';
import Navbar from './Navbar';

const Content = () => {
  return (
    <div className="content-container">
      

      <div className="content-main">
        <div className='title'>
          <h1 className='title'>Almirón Pedro Augusto</h1>
          <h2>Analista y Programador de Sistemas</h2>
          <br />
        </div>
        
        <p className='encabezado'>
          Bienvenido a mi portafolio. Aquí encontrarás algunos de mis proyectos,
          información sobre mí y formas de contactarme.
        </p>

        
      </div>
            <Navbar/>
      </div>

    
  );
};

export default Content;
