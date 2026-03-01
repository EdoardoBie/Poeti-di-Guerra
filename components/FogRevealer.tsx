import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FogRevealer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Initial full fog
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, width, height);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, width, height);
    };

    const mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
        // Correct mouse position relative to canvas
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      // 1. Fade the whole canvas slightly towards black (simulating fog filling back in)
      // The lower the alpha, the slower the fog comes back
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(15, 15, 15, 0.04)'; 
      ctx.fillRect(0, 0, width, height);

      // 2. Cut a hole where the mouse is
      ctx.globalCompositeOperation = 'destination-out';
      
      // Create a soft brush gradient
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 120);
      gradient.addColorStop(0, 'rgba(0,0,0,1)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 120, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]">
       
       {/* Hidden Content Layer (Underneath) */}
       <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <div className="relative w-full max-w-6xl h-full p-10 grid grid-cols-2 md:grid-cols-3 gap-4 opacity-70">
              {/* Random chaotic content to be revealed */}
              <div className="col-span-1 row-span-2 border border-gray-800 p-4 rotate-2">
                  <h3 className="font-serif text-4xl text-[#8A1C1C]">LOST</h3>
                  <p className="font-mono text-xs mt-2 text-gray-500">Coordinates unknown. The map is burned.</p>
              </div>
              <div className="col-span-2 border-b border-gray-700 flex items-center justify-center -rotate-1">
                  <span className="text-9xl font-black text-[#1a1a1a] tracking-widest">WAR</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <p className="font-display text-2xl text-white">"The fog is not weather.</p>
                  <p className="font-display text-2xl text-white">It is history."</p>
              </div>
              <div className="col-span-1 border-r border-gray-800 p-4 rotate-12 translate-y-20">
                   <p className="vertical-rl font-serif text-lg text-gray-400">Where are the nine leaves?</p>
              </div>
              <div className="col-span-1 flex items-end justify-end p-8 -rotate-3">
                   <div className="w-24 h-24 rounded-full border border-[#5C1919]"></div>
              </div>
          </div>
       </div>

       {/* The Fog Canvas */}
       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-none touch-none" />

       {/* Instruction Overlay */}
       <motion.div 
         initial={{ opacity: 1 }}
         animate={{ opacity: 0 }}
         transition={{ delay: 3, duration: 1 }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white font-mono text-sm tracking-widest border border-white px-4 py-2 bg-black/50 backdrop-blur-md"
       >
         MOVE TO CLEAR THE FOG
       </motion.div>
    </section>
  );
};

export default FogRevealer;