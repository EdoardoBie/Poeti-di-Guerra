import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PhonographDistortion: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const rotateCounter = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <section className="relative h-[80vh] bg-[#E6E4D5] overflow-hidden flex items-center justify-center cursor-help">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30"></div>
            
            {/* Center Axis */}
            <div className="absolute w-2 h-2 bg-black rounded-full z-50"></div>
            <div className="absolute w-[1px] h-screen bg-black/10 z-0"></div>
            <div className="absolute w-screen h-[1px] bg-black/10 z-0"></div>

            {/* CJR Ring (Inner) */}
            <motion.div 
                style={{ rotate: rotateClockwise }}
                className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[#8A1C1C] flex items-center justify-center"
            >
                <svg viewBox="0 0 500 500" className="w-full h-full animate-spin-slow">
                    <path id="curveCJR" d="M 100, 250 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" fill="transparent" />
                    <text className="font-serif text-xl fill-[#8A1C1C] tracking-[0.2em] uppercase">
                        <textPath href="#curveCJR" startOffset="0%">
                            Chen Jingrong • The Logic of Fog • Nine Leaves • Silence • 
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* AA Ring (Outer) */}
            <motion.div 
                style={{ rotate: rotateCounter }}
                className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full border border-[#2C3E50] flex items-center justify-center dashed-border"
            >
                <svg viewBox="0 0 700 700" className="w-full h-full">
                    <path id="curveAA" d="M 100, 350 a 250,250 0 1,1 500,0 a 250,250 0 1,1 -500,0" fill="transparent" />
                    <text className="font-serif text-xl fill-[#2C3E50] tracking-[0.2em] uppercase">
                        <textPath href="#curveAA" startOffset="50%">
                            Anna Akhmatova • Requiem • Silver Age • Resistance • 
                        </textPath>
                    </text>
                </svg>
            </motion.div>
            
            <div className="absolute bottom-10 font-mono text-xs text-black/50">
                THE CYCLICAL NATURE OF SUPPRESSION
            </div>
        </section>
    );
};

export default PhonographDistortion;