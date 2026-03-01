import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PARALLEL_LIVES, UI_TEXT } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const BiographyCard: React.FC<{ data: typeof PARALLEL_LIVES['en'][0]; index: number; total: number }> = ({ data, index, total }) => {
  return (
    <div className="relative h-screen w-[85vw] md:w-[70vw] flex-shrink-0 flex items-center justify-center p-8 border-r border-gray-900 snap-center bg-[#0A0A0A] overflow-hidden">
      {/* Background Year/Title - Parallax Layer */}
      <div className="absolute top-10 left-10 z-0 opacity-10 font-display font-black text-6xl md:text-9xl text-[#E6E4D5] whitespace-nowrap pointer-events-none">
        {data.title}
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* THE SYNAPSE (Visual Connector) */}
        {/* A line that physically connects the two disparate lives */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-[#8A1C1C] via-white to-slate-500 opacity-30"></div>
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]"></div>

        {/* Chen Jingrong Column */}
        <div className="relative group text-right md:pr-8">
           <h3 className="font-serif text-3xl text-[#E6E4D5] mb-2">Chen Jingrong</h3>
           <p className="font-mono text-[10px] text-[#8A1C1C] mb-6 uppercase tracking-widest">{data.chen.location}</p>
           <p className="font-serif text-gray-400 leading-relaxed mb-6 text-sm md:text-base border-r border-[#8A1C1C] pr-4">
             {data.chen.text}
           </p>
           <blockquote className="italic text-gray-500 text-xs">
             "{data.chen.quote}"
           </blockquote>
        </div>

        {/* Anna Akhmatova Column */}
        <div className="relative group text-left md:pl-8">
           <h3 className="font-serif text-3xl text-slate-300 mb-2">Anna Akhmatova</h3>
           <p className="font-mono text-[10px] text-slate-500 mb-6 uppercase tracking-widest">{data.anna.location}</p>
           <p className="font-serif text-gray-400 leading-relaxed mb-6 text-sm md:text-base border-l border-slate-600 pl-4">
             {data.anna.text}
           </p>
           <blockquote className="italic text-gray-500 text-xs">
             "{data.anna.quote}"
           </blockquote>
        </div>

      </div>
      
      {/* Vertical divider line in the bg */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-900 z-0 hidden md:block"></div>

      {/* Decorative Index */}
      <div className="absolute bottom-10 right-10 font-mono text-xs text-gray-700">
         0{index + 1} / 0{total}
      </div>
    </div>
  );
};

const HorizontalDualBiography: React.FC = () => {
  const { language } = useLanguage();
  const lives = PARALLEL_LIVES[language];
  const text = UI_TEXT[language].echoes; // Reusing echoes text for intro as fallback or similar logic

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300vw"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Intro Marker */}
        <div className="absolute top-0 left-0 h-full w-16 md:w-24 bg-black z-20 border-r border-gray-900 flex flex-col justify-center items-center text-gray-500 shadow-2xl">
            <span className="vertical-rl font-mono text-xs tracking-[0.5em] rotate-180 text-[#E6E4D5]">PARALLEL • LIVES</span>
        </div>

        <motion.div style={{ x }} className="flex pl-16 md:pl-24 h-full items-center">
          
          {/* Intro Panel */}
          <div className="h-screen w-[85vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center p-12 border-r border-gray-900 bg-[#0A0A0A] z-10">
             <div className="w-12 h-1 bg-[#8A1C1C] mb-8"></div>
             <h2 className="font-display text-4xl md:text-6xl text-[#E6E4D5] mb-6 leading-tight">
               {language === 'en' ? "East & West:" : "Est & Ovest:"}<br/>
               {language === 'en' ? "The Geometry of" : "La Geometria della"}<br/>
               {language === 'en' ? "Suffering." : "Sofferenza."}
             </h2>
             <p className="font-serif text-gray-400 max-w-sm text-sm leading-loose">
               {text.centerText}
             </p>
             <div className="mt-12 flex gap-4 text-xs font-mono uppercase text-gray-600">
                <span>SCROLL &rarr;</span>
             </div>
          </div>

          {/* The Content Panels */}
          {lives.map((life, i) => (
            <BiographyCard key={life.id} data={life} index={i} total={lives.length} />
          ))}

          {/* Outro/Transition Space */}
          <div className="h-screen w-[20vw] flex-shrink-0 flex items-center justify-center bg-[#050505]">
             <span className="font-mono text-xs text-gray-600">END OF ARCHIVE REEL</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalDualBiography;