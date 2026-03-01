import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WORKS = [
  { title: "Symphony of Confusion", year: "1946", type: "Poetry Collection" },
  { title: "The Logic of Logic", year: "1948", type: "Essay" },
  { title: "Flowers of Evil (Baudelaire)", year: "1950s", type: "Translation" },
  { title: "Tales of Andersen", year: "1950s", type: "Translation" },
  { title: "Parasite", year: "1947", type: "Poem" },
  { title: "Night Passenger", year: "1980s", type: "Anthology" },
];

const ArchiveGallery: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 6 items * 40vw + spacers. 
  // Calculating roughly to slide enough to see the last item.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0F0F0F]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-8 left-8 z-10 pointer-events-none mix-blend-difference">
            <h2 className="text-[#E6E4D5] font-display text-4xl">ARCHIVE</h2>
            <p className="font-mono text-xs text-[#8A1C1C] mt-2">SELECTED WORKS</p>
        </div>
        
        <motion.div style={{ x }} className="flex gap-0 px-24 h-full items-center">
          
          {/* Intro Spacer */}
          <div className="w-[10vw] flex-shrink-0"></div>

          {WORKS.map((work, i) => (
            <div 
              key={i} 
              className="group relative h-[70vh] w-[45vw] md:w-[35vw] flex-shrink-0 flex flex-col justify-between p-8 border-r border-gray-800 transition-all duration-500 hover:bg-[#161616]"
            >
              <div className="flex justify-between items-start font-mono text-xs text-gray-500 group-hover:text-[#E6E4D5]">
                <span>{work.year}</span>
                <span>0{i + 1}</span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                 <span className="text-[10rem] font-serif">{i + 1}</span>
              </div>

              <div className="relative z-10">
                <span className="font-mono text-[10px] uppercase text-[#8A1C1C] mb-4 block tracking-widest">{work.type}</span>
                <h3 className="font-serif text-4xl md:text-5xl text-[#E6E4D5] group-hover:text-white leading-tight">
                    {work.title}
                </h3>
              </div>

              <div className="w-full h-[1px] bg-gray-800 group-hover:bg-[#8A1C1C] transition-colors duration-500 mt-8"></div>
            </div>
          ))}
          
          {/* Spacer for scroll end */}
          <div className="w-[50vw] flex-shrink-0 flex items-center justify-center">
             <div className="w-32 h-32 border border-gray-800 rounded-full flex items-center justify-center">
                <span className="font-mono text-xs text-gray-600">END</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchiveGallery;