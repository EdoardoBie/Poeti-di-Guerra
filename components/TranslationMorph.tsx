import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TRANSLATION_SAMPLE } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const TranslationMorph: React.FC = () => {
  const { language } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const data = TRANSLATION_SAMPLE[language];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#E6E4D5] text-[#0F0F0F] p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Description */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h3 className="font-mono text-xs uppercase tracking-widest mb-4 border-b border-black pb-2">
            {data.title}
          </h3>
          <p className="font-serif text-lg md:text-xl leading-relaxed mb-6">
            {data.desc}
          </p>
          <div className="font-mono text-sm text-gray-600 border-l-2 border-[#8A1C1C] pl-4">
            {data.commentary}
          </div>
        </div>

        {/* Interactive Text */}
        <div 
          className="relative h-64 md:h-96 flex items-center justify-center cursor-none order-1 md:order-2"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Chinese Layer */}
          <motion.div
            className="absolute text-8xl md:text-9xl font-black font-serif text-[#0F0F0F]"
            animate={{ 
              opacity: hovered ? 0.1 : 1,
              filter: hovered ? 'blur(8px)' : 'blur(0px)',
              scale: hovered ? 1.1 : 1
            }}
            transition={{ duration: 0.8 }}
          >
            {data.chinese}
          </motion.div>

          {/* Pinyin Overlay */}
           <motion.div
            className="absolute text-4xl font-mono text-[#8A1C1C] mix-blend-multiply"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0.3 : 0, y: hovered ? -60 : 0 }}
          >
            {data.pinyin}
          </motion.div>

          {/* English Layer */}
          <motion.div
            className="absolute text-6xl md:text-8xl font-display font-bold text-[#8A1C1C]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ 
              clipPath: hovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              x: hovered ? 0 : -20
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {data.english}
          </motion.div>

          {/* Custom Cursor Follower would go here, simplified for this implementation */}
          <motion.div 
            className="absolute w-4 h-4 bg-red-600 rounded-full pointer-events-none mix-blend-multiply"
            animate={{ scale: hovered ? 4 : 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default TranslationMorph;