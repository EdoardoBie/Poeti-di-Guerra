import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SilenceChamber: React.FC = () => {
  const [isStill, setIsStill] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  
  // Audio ref for subtle silence sound
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    let movementTimer: ReturnType<typeof setTimeout>;
    let progressInterval: ReturnType<typeof setInterval>;

    const handleMouseMove = () => {
      setIsStill(false);
      setProgress(0);
      clearTimeout(movementTimer);
      
      // Reset logic
      movementTimer = setTimeout(() => {
        setIsStill(true);
      }, 500); // Start counting stillness after 500ms
    };

    if (isInView) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movementTimer);
      clearInterval(progressInterval);
    };
  }, [isInView]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isStill && isInView) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 2, 100)); // Reach 100 in ~5 seconds
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isStill, isInView]);

  // Sound modulation based on progress
  useEffect(() => {
     if (!window.AudioContext) return;
     if (!audioCtxRef.current && isInView) {
        // Init minimal audio context only on user interaction if needed
        // For this demo, we won't auto-play audio to avoid browser policies, 
        // but visually represent the silence.
     }
  }, [progress]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-8 border-t border-gray-900"
    >
      <div className="absolute top-10 left-10 font-mono text-xs text-gray-600">
        SECTION: WAR AND SILENCE<br/>
        INSTRUCTION: BE STILL TO READ
      </div>

      {/* Progress Bar / Tension Wire */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-900">
        <motion.div 
          className="h-full bg-red-900 shadow-[0_0_10px_#5C1919]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-2xl text-center relative z-10 mix-blend-screen">
        <motion.div
            className="text-gray-500 font-mono mb-8"
            animate={{ opacity: isStill ? 0 : 1 }}
        >
            [ Movement detected. The censor is watching. ]
        </motion.div>

        <motion.div
            className="font-serif text-2xl md:text-4xl leading-relaxed text-[#E6E4D5]"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ 
                opacity: progress / 100, 
                filter: `blur(${10 - (progress/10)}px)`,
                scale: 0.9 + (progress / 1000)
            }}
        >
            <p className="mb-8">
              "The logic of fog is the logic of survival. <br/>
              When the city burns, we become ash.<br/>
              When the mouth is covered, the eyes scream."
            </p>
            <p className="text-xl text-[#8A1C1C]">
               —— 雾的逻辑 (The Logic of Fog)
            </p>
        </motion.div>
      </div>

      {/* Background static noise increases when moving */}
      <motion.div 
        className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
        animate={{ opacity: isStill ? 0.05 : 0.4 }}
      />
    </section>
  );
};

export default SilenceChamber;