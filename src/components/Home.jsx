import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MeteorShower from './MeteorShower';

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out"
    });
  }, []);

  return (
    <section className="home">
      <MeteorShower />
      <div className="container">
        <div ref={titleRef}>
          <h1 className="display-1">
            Portfolio of
            <br />
            <span className="text-gradient">Utkarsh Tripathi</span>
          </h1>
          <p className="lead">Data Analyst & Data Scientist</p>
        </div>
      </div>
    </section>

  );
};

export default Home; 