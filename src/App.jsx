import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="app dark-theme">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
    </div>
  );
}

export default App;
