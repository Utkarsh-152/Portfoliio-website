import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '../data/projects.json';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    // Main projects section animation - faster duration and scrub
    gsap.fromTo(
      projectsRef.current,
      { 
        opacity: 0.10,
        y: 100 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Reduced from 2
        ease: "power3.out", // Changed to power3 for faster easing
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 85%",
          end: "top 60%", // Shorter animation range
          scrub: 1, // Reduced from 2 for faster response
          toggleActions: "play none none reverse"
        }
      }
    );

    // Project cards staggered animation - faster animations
    projectCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30, // Reduced from 50 for shorter distance
          scale: 0.98 // Less scale change for faster perception
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8, // Reduced from 1.5
          ease: "power2.out", // Changed for snappier animation
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%", // Shorter animation range
            scrub: 0.8, // Reduced from 1.5 for faster response
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