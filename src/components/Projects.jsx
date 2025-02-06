import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '../data/projects.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    // Main projects section animation
    gsap.fromTo(
      projectsRef.current,
      { 
        opacity: 0.1,
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-wrapper", // Changed to wrapper class
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    // Project cards staggered animation
    projectCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1, // Add delay for stagger effect
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-wrapper", // Changed to wrapper class
            start: "top 70%",
            end: "top 20%",
            scrub: 0.8,
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-wrapper" ref={projectsRef}>
          <h2 className="display-4">Projects</h2>
          <div className="projects-grid">
            {projectsData.projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                ref={el => projectCardsRef.current[index] = el}
              >
                {project.image && (
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && project.githubUrl !== "N/A" && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-link ${project.githubUrl.includes('kaggle.com') ? 'kaggle' : 'github'}`}
                        onClick={(e) => {
                          const url = project.githubUrl;
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        View on {project.githubUrl.includes('kaggle.com') ? 'Kaggle' : 'GitHub'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 