import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_TEXT } from '../constants';

const WarManifesto: React.FC = () => {
  const { language } = useLanguage();
  const text = UI_TEXT[language].manifesto;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 min-h-[120vh] bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="font-display text-[#8A1C1C] text-xl tracking-[0.5em] mb-12 uppercase">
          {text.title}
        </h2>
        
        <div className="relative font-serif font-bold text-[#E6E4D5] leading-none mix-blend-screen">
            <motion.div style={{ y: y1, x: -50 }} className="text-6xl md:text-9xl opacity-20 whitespace-nowrap">
                {text.words[0]}
            </motion.div>
            <motion.div style={{ y: y2, x: 50 }} className="text-6xl md:text-9xl text-[#5C1919] z-20 whitespace-nowrap my-4">
                {text.words[1]}
            </motion.div>
            <motion.div style={{ y: y3 }} className="text-4xl md:text-8xl opacity-40">
                {text.words[2]}
            </motion.div>
        </div>

        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 font-mono text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-loose text-justify"
        >
            {text.text}
        </motion.p>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-gray-800 opacity-30"></div>
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-gray-800 opacity-30"></div>
    </section>
  );
};

export default WarManifesto;