import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  intensity?: 'low' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', as = 'p', intensity = 'low' }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const Tag = as as any;

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    normal: { x: 0, opacity: 1, skewX: 0 },
    glitch: {
      x: [0, -2, 2, -1, 0],
      skewX: [0, 10, -10, 0],
      opacity: [1, 0.8, 1],
      transition: { duration: 0.2 },
    },
  };

  return (
    <Tag className={`relative inline-block ${className}`}>
      <motion.span
        animate={isGlitching ? 'glitch' : 'normal'}
        variants={variants}
      >
        {text}
      </motion.span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -ml-0.5 text-red-800 opacity-50 mix-blend-screen animate-pulse">
            {text}
          </span>
          <span className="absolute top-0 left-0 ml-0.5 text-blue-900 opacity-50 mix-blend-screen animate-pulse">
            {text}
          </span>
        </>
      )}
    </Tag>
  );
};

export default GlitchText;