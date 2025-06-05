import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene from './components/Scene';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Hero />
      <Content />
    </div>
  );
}

export default App;