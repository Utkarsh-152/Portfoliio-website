import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skillsData from '../data/skills.json';
import certificatesData from '../data/certificates.json';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const skillCategoriesRef = useRef([]);
  const certificatesRef = useRef([]);
  const skillLevelsRef = useRef([]);

  useEffect(() => {
    // Main skills section animation
    gsap.fromTo(
      skillsRef.current,
      { 
        opacity: 0,
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 2
        }
      }
    );

    // Skill categories animation with stagger
    gsap.fromTo(
      skillCategoriesRef.current,
      {
        opacity: 0,
        x: index => index % 2 === 0 ? -50 : 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
          end: "center center",
          scrub: 1.5
        }
      }
    );

    // Skill level bars animation
    skillLevelsRef.current.forEach((level) => {
      gsap.fromTo(
        level,
        {
          scaleX: 0
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: level,
            start: "top 85%",
            end: "top 65%",
            scrub: 1
          }
        }
      );
    });

    // Certificates animation
    gsap.fromTo(
      certificatesRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certificates",
          start: "top 70%",
          end: "center center",
          scrub: 1.5
        }
      }
    );
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-wrapper" ref={skillsRef}>
          <h2 className="display-4">Skills & Certificates</h2>
          
          <div className="skills-content">
            <div className="technical-skills">
              <h3 className="section-title">Technical Skills</h3>
              <div className="skills-grid">
                {skillsData.technicalSkills.map((category, index) => (
                  <div 
                    key={index} 
                    className="skill-category"
                    ref={el => skillCategoriesRef.current[index] = el}
                  >
                    <h4 className="category-title">{category.category}</h4>
                    <div className="skill-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <span className="skill-tag">
                            {skill.name || skill}
                          </span>
                          
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certificates">
              <h3 className="section-title">Certificates</h3>
              <div className="certificates-grid">
                {certificatesData.certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="certificate-card"
                    ref={el => certificatesRef.current[index] = el}
                  >
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 