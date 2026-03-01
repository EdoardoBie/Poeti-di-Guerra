import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TEXT } from '../constants';

const Word: React.FC<{ word: string; onReveal: () => void }> = ({ word, onReveal }) => {
  const [isRedacted, setIsRedacted] = useState(true);

  const handleHover = () => {
    if (isRedacted) {
      setIsRedacted(false);
      onReveal();
      
      // The censorship fights back - darker theme logic
      // Random chance to re-censor after a delay, simulating struggle
      if (Math.random() > 0.7) {
        setTimeout(() => {
           setIsRedacted(true);
        }, 3000 + Math.random() * 5000);
      }
    }
  };

  return (
    <span 
      onMouseEnter={handleHover}
      onTouchStart={handleHover} // Mobile support
      className="relative inline-block mr-3 mb-2 cursor-crosshair"
    >
      <span 
        className={`relative z-10 transition-colors duration-500 font-mono text-lg md:text-2xl ${isRedacted ? 'text-transparent' : 'text-[#1F1F1F]'}`}
      >
        {word}
      </span>
      
      {/* Redaction Bar */}
      <motion.span 
        initial={false}
        animate={{ 
          height: isRedacted ? '100%' : '2px',
          backgroundColor: isRedacted ? '#000000' : '#8A1C1C',
          opacity: isRedacted ? 1 : 0.5
        }}
        className="absolute top-0 left-0 w-full bg-black block z-20"
      />
      
      {/* Glitch effect under layer */}
      <span className="absolute top-0 left-0 text-[#8A1C1C] opacity-0 group-hover:opacity-50 blur-[1px]">
        {word}
      </span>
    </span>
  );
};

const CensorshipGame: React.FC = () => {
  const { language } = useLanguage();
  const text = UI_TEXT[language].censorship;
  const words = text.text.split(" ");
  
  const [revealedCount, setRevealedCount] = useState(0);

  return (
    <section className="min-h-[80vh] bg-[#E6E4D5] text-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] pointer-events-none"></div>
      
      {/* Stamp */}
      <div className="absolute top-10 right-10 border-4 border-[#8A1C1C] text-[#8A1C1C] p-2 font-display font-bold text-4xl opacity-20 -rotate-12 pointer-events-none select-none">
        {text.stamp}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="mb-8 font-mono text-xs uppercase tracking-widest text-[#5C1919] flex justify-between">
          <span>{text.record}</span>
          <span>{text.status}</span>
        </div>

        <div className="bg-white/50 p-12 shadow-sm border border-gray-300 backdrop-blur-sm relative">
           {/* Paper holes */}
           <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly opacity-50">
              <div className="w-4 h-4 rounded-full bg-[#E6E4D5]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E6E4D5]"></div>
              <div className="w-4 h-4 rounded-full bg-[#E6E4D5]"></div>
           </div>

           <div className="ml-8 leading-loose">
            {words.map((word, index) => (
                <Word 
                  key={index} 
                  word={word} 
                  onReveal={() => setRevealedCount(prev => Math.min(prev + 1, words.length))} 
                />
            ))}
           </div>
        </div>

        <div className="mt-8 text-center font-mono text-xs text-gray-500">
          {text.interaction} <br/>
          {text.recovered}: {revealedCount} / {words.length}
        </div>
      </div>
    </section>
  );
};

export default CensorshipGame;