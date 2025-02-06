import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MeteorShower = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create meteors
    const meteors = [];
    const meteorGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const meteorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) {
      const meteor = new THREE.Mesh(meteorGeometry, meteorMaterial);
      meteor.position.set(
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 50 - 25
      );
      meteor.velocity = new THREE.Vector3(
        -0.5 - Math.random(),
        -0.5 - Math.random(),
        0
      );
      meteors.push(meteor);
      scene.add(meteor);
    }

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);

      meteors.forEach(meteor => {
        meteor.position.add(meteor.velocity);
        
        if (meteor.position.x < -50 || meteor.position.y < -50) {
          meteor.position.set(
            50,
            50,
            Math.random() * 50 - 25
          );
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default MeteorShower; 