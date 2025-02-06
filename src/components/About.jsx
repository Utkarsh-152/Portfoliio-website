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
        duration: 1,
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top 80%",
          end: "top 30%",
          scrub: 1
        }
      }
    );

    // Info items animation
    gsap.fromTo(
      infoItemsRef.current,
      { 
        opacity: 0,
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top 70%",
          end: "top 20%",
          scrub: 0.5
        }
      }
    );
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
                I can help you to analyze your data and build a model to predict the future,
                want to know more about me, scroll down.
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