import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);
  const infoItemsRef = useRef([]);

  useEffect(() => {
    // Main content animation
    gsap.fromTo(
      contentRef.current,
      { 
        opacity: 0,
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top center",
          end: "+=200",
          scrub: 1,

        }
      }
    );

    // Info items animation
    infoItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0,
          x: -50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "top top",
            scrub: 0.5,
            toggleActions: "play none none reverse"

          }
        }
      );
    });
  }, []);

  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="display-4">About Me</h2>
          <div className="about-content" ref={contentRef}>
            <div className="about-text">
              <p className="lead">
                Hi, I'm Utkarsh Tripathi, a passionate Data Analyst and Data Scientist. 
                I specialize in transforming complex data into actionable insights and 
                building intelligent solutions using machine learning and deep learning techniques.
              </p>
            </div>
            
            <div className="info-section">
              <h3 className="section-title">Quick Facts</h3>
              <ul className="list-unstyled info-list">
                {[
                  { icon: '🎓', title: 'Education', content: 'B. Sc. in Mathematics and Physics Major' },
                  { icon: '📍', title: 'Location', content: 'Prayagraj, Uttar Pradesh, India' },
                  { icon: '💼', title: 'Experience', content: 'Fresher with strong academic projects' },
                  { icon: '🎯', title: 'Focus Areas', content: 'Data Analysis, Machine Learning, Deep Learning, and Data Science' }
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="info-item"
                    ref={el => infoItemsRef.current[index] = el}
                  >
                    <span className="icon">{item.icon}</span>
                    <div className="info-content">
                      <strong>{item.title}</strong>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;