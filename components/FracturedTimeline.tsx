import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TIMELINE_EVENTS, COLORS } from '../constants';
import { TimelineEvent } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const EventCard: React.FC<{ event: TimelineEvent }> = ({ event }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 50, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="absolute group w-72 md:w-96 cursor-grab active:cursor-grabbing"
      style={{
        left: `${event.x}%`,
        top: `${event.y}%`,
      }}
    >
      {/* Visual Connector Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-24 w-[1px] bg-gradient-to-b from-transparent to-gray-700 opacity-50"></div>

      <div className="relative bg-[#111]/90 backdrop-blur-md border border-gray-800 p-6 overflow-hidden transition-colors duration-300 hover:border-[#8A1C1C] hover:shadow-[0_0_30px_rgba(138,28,28,0.2)]">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex justify-between items-start mb-4 border-b border-gray-800 pb-2">
            <span className="text-5xl font-display text-[#E6E4D5] opacity-20 group-hover:opacity-100 group-hover:text-[#8A1C1C] transition-all duration-500">
                {event.year}
            </span>
            <span className={`px-2 py-1 text-[10px] uppercase tracking-widest border ${event.theme === 'war' ? 'border-red-900 text-red-500' : 'border-gray-700 text-gray-500'}`}>
                {event.theme}
            </span>
        </div>

        <p className="relative z-10 font-serif text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
          {event.content}
        </p>
        
        {/* Corner Accents */}
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-600 group-hover:border-[#8A1C1C]"></div>
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-600 group-hover:border-[#8A1C1C]"></div>
      </div>
    </motion.div>
  );
};

const FracturedTimeline: React.FC = () => {
  const containerRef = useRef(null);
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={containerRef} className="relative h-[160vh] w-full bg-[#080808] overflow-hidden border-t border-gray-900">
       <div className="absolute top-12 left-12 z-10">
        <h3 className="font-display text-4xl text-[#E6E4D5]">FRACTURED TIME</h3>
        <div className="w-12 h-1 bg-[#8A1C1C] mt-4 mb-2"></div>
        <p className="font-mono text-xs text-gray-500 max-w-xs leading-relaxed">
          The timeline is not linear. It is a debris field of memory.<br/>
          Drag the fragments to reorganize the past.
        </p>
      </div>

      <motion.div 
        style={{ y, rotate }}
        className="relative w-full h-full max-w-7xl mx-auto"
      >
        {/* Background grid for modern feel */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none">
            {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-[#E6E4D5]"></div>
            ))}
        </div>

        {TIMELINE_EVENTS[language].map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </section>
  );
};

export default FracturedTimeline;