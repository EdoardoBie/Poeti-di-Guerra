import React from 'react';
import { motion } from 'framer-motion';
import AshParticles from './AshParticles';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TEXT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const text = UI_TEXT[language].hero;

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0A0A0A] text-[#E6E4D5] cursor-none selection:bg-[#8A1C1C] selection:text-white">
      <div className="absolute inset-0 z-0">
         <AshParticles />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        
        {/* Main Conceptual Title */}
        <div className="flex flex-col items-center leading-[0.85] select-none relative mix-blend-screen z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="font-display text-[12vw] md:text-[10rem] text-[#E6E4D5] tracking-tight z-10"
            >
              {text.logic}
            </motion.h2>
            
            {/* "OF FOG" with Outline/Ghost effect - Improved Visibility */}
            <motion.h2
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="font-display text-[12vw] md:text-[10rem] text-transparent tracking-tight relative z-0"
              style={{ WebkitTextStroke: '1px #E6E4D5' }}
            >
              {text.fog}
            </motion.h2>
        </div>

        {/* Subtitle / Theme */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 font-mono text-xs text-gray-500 tracking-[1em] uppercase"
        >
          {text.subtitle}
        </motion.div>

        {/* Dual Names Footer - Anchored at bottom */}
        <div className="absolute bottom-20 w-full max-w-6xl px-8 flex justify-between items-end">
            
            {/* Left: Chen Jingrong */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-left group cursor-pointer"
            >
                <div className="h-[1px] w-12 bg-[#8A1C1C] mb-4 group-hover:w-24 transition-all duration-500"></div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#E6E4D5] group-hover:text-[#8A1C1C] transition-colors">Chen Jingrong</h3>
                <p className="font-mono text-[10px] text-gray-600 mt-1 tracking-widest">{text.chenRole}</p>
            </motion.div>

            {/* Connector Line */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
                className="hidden md:block flex-grow h-[1px] bg-gradient-to-r from-[#8A1C1C]/20 via-gray-800 to-slate-600/20 mx-12 mb-4"
            ></motion.div>

            {/* Right: Anna Akhmatova */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-right group cursor-pointer"
            >
                <div className="h-[1px] w-12 bg-slate-600 mb-4 ml-auto group-hover:w-24 transition-all duration-500"></div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#E6E4D5] group-hover:text-slate-400 transition-colors">Anna Akhmatova</h3>
                <p className="font-mono text-[10px] text-gray-600 mt-1 tracking-widest">{text.annaRole}</p>
            </motion.div>
        </div>

         {/* Bottom Scroll Indicator - Simplified */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
             <span className="font-mono text-[9px] text-gray-500 tracking-[0.4em] uppercase">{text.scroll}</span>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;