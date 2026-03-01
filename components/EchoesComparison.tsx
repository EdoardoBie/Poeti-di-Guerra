import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TEXT, ECHOES_TEXT } from '../constants';

const EchoesComparison: React.FC = () => {
  const { language } = useLanguage();
  const text = UI_TEXT[language].echoes;
  const content = ECHOES_TEXT[language];

  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | 'center'>('center');
  
  const x = useMotionValue(0); // 0 to 1
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  // Map mouse position to split width
  const leftWidth = useTransform(springX, [0, 1], ['100%', '0%']);
  const rightWidth = useTransform(springX, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    
    // Update spring target
    x.set(relativeX);

    // Determine semantic state for text emphasis
    if (relativeX < 0.45) setHoverSide('left');
    else if (relativeX > 0.55) setHoverSide('right');
    else setHoverSide('center');
  };

  const handleMouseLeave = () => {
    x.set(0.5); // Reset to center
    setHoverSide('center');
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[110vh] w-full overflow-hidden flex bg-black border-t border-gray-900 select-none"
    >
      {/* Absolute Label */}
      <div className="absolute top-8 left-0 w-full text-center z-50 pointer-events-none mix-blend-difference text-[#E6E4D5]">
        <h3 className="font-display text-2xl tracking-[0.3em] uppercase">{text.title}</h3>
        <p className="font-mono text-xs opacity-70 mt-2">{text.subtitle}</p>
      </div>

      {/* LEFT SIDE: CHEN JINGRONG */}
      <motion.div 
        style={{ width: leftWidth }} 
        className="relative h-full overflow-hidden bg-[#0F0F0F] border-r border-[#8A1C1C]"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#5C1919]/20"></div>
        
        <div className="absolute top-1/2 left-12 transform -translate-y-1/2 max-w-lg z-10 p-8">
           <motion.div
             animate={{ opacity: hoverSide === 'left' || hoverSide === 'center' ? 1 : 0.3, x: hoverSide === 'left' ? 0 : -20 }}
             transition={{ duration: 0.5 }}
           >
              <h2 className="text-6xl md:text-8xl font-serif text-[#E6E4D5] mb-4">{content.chen.name1}</h2>
              <h2 className="text-4xl md:text-6xl font-serif text-[#8A1C1C] mb-8">{content.chen.name2}</h2>
              
              <blockquote className="font-serif text-xl md:text-2xl text-gray-300 italic border-l-2 border-[#8A1C1C] pl-6 mb-6 whitespace-pre-line">
                {content.chen.quote}
              </blockquote>

              <div className="font-mono text-xs text-[#8A1C1C] space-y-2 uppercase tracking-widest">
                <p>{content.chen.loc}</p>
                <p>{content.chen.era}</p>
                <p>{content.chen.fate}</p>
              </div>
           </motion.div>
        </div>
        
        {/* Background Visual for Chen (Abstract) */}
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#8A1C1C] rounded-full blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </motion.div>


      {/* RIGHT SIDE: ANNA AKHMATOVA */}
      <motion.div 
        style={{ width: rightWidth }} 
        className="relative h-full overflow-hidden bg-[#1a1f25] border-l border-slate-600"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-slate-800/20"></div>

        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 max-w-lg z-10 p-8 text-right flex flex-col items-end">
           <motion.div
             animate={{ opacity: hoverSide === 'right' || hoverSide === 'center' ? 1 : 0.3, x: hoverSide === 'right' ? 0 : 20 }}
             transition={{ duration: 0.5 }}
           >
              <h2 className="text-6xl md:text-8xl font-serif text-[#E6E4D5] mb-4">{content.anna.name1}</h2>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-400 mb-8">{content.anna.name2}</h2>
              
              <blockquote className="font-serif text-xl md:text-2xl text-gray-300 italic border-r-2 border-slate-500 pr-6 mb-6 whitespace-pre-line">
                {content.anna.quote}
              </blockquote>

              <div className="font-mono text-xs text-slate-400 space-y-2 uppercase tracking-widest">
                <p>{content.anna.loc}</p>
                <p>{content.anna.era}</p>
                <p>{content.anna.fate}</p>
              </div>
           </motion.div>
        </div>

        {/* Background Visual for Anna (Abstract) */}
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-slate-500 rounded-full blur-[100px] opacity-10 -translate-x-1/3 -translate-y-1/3"></div>
      </motion.div>


      {/* CENTER INTERFACE / DRAG HANDLE */}
      <div className="absolute top-0 bottom-0 left-0 w-full pointer-events-none flex justify-center">
         {/* Center comparison text that appears when balanced */}
         <motion.div 
            className="self-center z-50 bg-black/80 backdrop-blur-md p-8 border border-gray-700 max-w-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
                opacity: hoverSide === 'center' ? 1 : 0,
                scale: hoverSide === 'center' ? 1 : 0.9
            }}
            transition={{ duration: 0.4 }}
         >
            <h4 className="font-display text-white text-xl mb-4">{text.centerTitle}</h4>
            <p className="font-serif text-gray-300 mb-4 leading-relaxed">
                {text.centerText}
            </p>
            <div className="flex justify-center gap-8 font-mono text-xs text-[#8A1C1C]">
                <span>REQUIEM</span>
                <span>•</span>
                <span>{language === 'en' ? "THE LOGIC OF FOG" : "LA LOGICA DELLA NEBBIA"}</span>
            </div>
         </motion.div>
      </div>

      {/* Floating Instruction */}
      <motion.div 
        className="absolute bottom-10 w-full text-center pointer-events-none mix-blend-difference text-white/50 font-mono text-xs"
        animate={{ opacity: hoverSide === 'center' ? 1 : 0 }}
      >
        {text.instruction}
      </motion.div>

    </section>
  );
};

export default EchoesComparison;