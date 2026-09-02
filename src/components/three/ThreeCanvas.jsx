import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas = ({ className = '', interactive = true }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Glowing data-sphere representing "Student Performance"
    const geometry = new THREE.IcosahedronGeometry(2.2, 2);
    const material = new THREE.MeshPhongMaterial({
      color: 0xc6ff3d,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
      emissive: 0xc6ff3d,
      emissiveIntensity: 0.45
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner core sphere
    const coreGeom = new THREE.SphereGeometry(1.1, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ 
      color: 0x7b5cff, 
      transparent: true, 
      opacity: 0.35 
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    // Ambient & Point lights
    const pointLight = new THREE.PointLight(0xc6ff3d, 1.2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const violetLight = new THREE.PointLight(0x7b5cff, 1.5, 100);
    violetLight.position.set(-5, -5, -5);
    scene.add(violetLight);

    const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambLight);

    camera.position.z = 4.5;

    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      sphere.rotation.x += 0.004;
      sphere.rotation.y += 0.006;

      if (interactive) {
        sphere.rotation.y += (mouseX - sphere.rotation.y) * 0.05;
        sphere.rotation.x += (mouseY - sphere.rotation.x) * 0.05;
      }

      const pulse = 1 + Math.sin(Date.now() * 0.0025) * 0.12;
      core.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return <div ref={mountRef} className={className} />;
};
