import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { gsap } from 'gsap';
import '../../styles/socialLinks.css';

const SocialLinks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="social-links" ref={containerRef}>
      <a
        href="https://github.com/augusto01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/augustoalmiron1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="almironaugusto404@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
