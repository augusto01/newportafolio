import '../styles/main.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'linear-gradient(to right, #0f0c29, #302b63)'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Augusto Almiron</h1>
        <h2 style={{ fontSize: '2rem', color: '#e94560' }}>Desarrollador Full Stack (MERN)</h2>
      </div>
    </section>
  );
};

export default Hero;
