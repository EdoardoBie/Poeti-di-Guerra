import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { POEMS, UI_TEXT } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const SignalInterference: React.FC = () => {
    const { language } = useLanguage();
    const poems = POEMS[language];
    const ui = UI_TEXT[language].signal;

    const [frequency, setFrequency] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setFrequency(percent);
    };

    // Opacity Logic
    // 0-30: Chen visible, Anna hidden
    // 30-70: Merged visible (Noise)
    // 70-100: Anna visible, Chen hidden
    
    const getOpacity = (type: 'chen' | 'anna' | 'merged') => {
        if (type === 'chen') return Math.max(0, 1 - (frequency / 40));
        if (type === 'anna') return Math.max(0, (frequency - 60) / 40);
        // Merged peaks at 50
        return Math.max(0, 1 - Math.abs(frequency - 50) / 20); 
    };

    return (
        <section className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden py-24 border-t border-gray-900">
            
            {/* Header / Tuner UI */}
            <div className="absolute top-10 w-full flex justify-between px-10 font-mono text-xs text-[#8A1C1C] uppercase tracking-widest z-20">
                <span>&lt; CHEN JINGRONG (AM)</span>
                <span className="animate-pulse">● LIVE SIGNAL</span>
                <span>ANNA AKHMATOVA (FM) &gt;</span>
            </div>

            {/* The Tuner Area */}
            <div 
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative w-full max-w-5xl h-[60vh] border-x border-gray-800 cursor-ew-resize group"
            >
                {/* Background Grid - Oscilloscope style */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
                
                {/* The Scanning Line */}
                <div 
                    className="absolute top-0 bottom-0 w-[1px] bg-[#E6E4D5] shadow-[0_0_15px_white] z-30 pointer-events-none"
                    style={{ left: `${frequency}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Content Layers */}
                <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                    
                    {/* Chen Layer (Left) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-100" style={{ opacity: getOpacity('chen') }}>
                         <h2 className="font-display text-[8rem] text-[#8A1C1C] opacity-20 absolute top-10 left-10 rotate-90 origin-top-left">1948</h2>
                         <div className="space-y-6">
                            <h3 className="font-mono text-xs text-[#8A1C1C] tracking-[1em]">{poems.chen.title}</h3>
                            {poems.chen.lines.map((line, i) => (
                                <p key={i} className="font-serif text-3xl md:text-5xl text-[#E6E4D5] blur-[0.5px]">{line}</p>
                            ))}
                         </div>
                    </div>

                    {/* Anna Layer (Right) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-100" style={{ opacity: getOpacity('anna') }}>
                         <h2 className="font-display text-[8rem] text-[#2C3E50] opacity-20 absolute bottom-10 right-10 -rotate-90 origin-bottom-right">1950</h2>
                         <div className="space-y-6">
                            <h3 className="font-mono text-xs text-[#2C3E50] tracking-[1em]">{poems.anna.title}</h3>
                            {poems.anna.lines.map((line, i) => (
                                <p key={i} className="font-serif text-3xl md:text-5xl text-slate-300 blur-[0.5px]">{line}</p>
                            ))}
                         </div>
                    </div>

                    {/* INTERFERENCE Layer (Center) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-75 mix-blend-difference" style={{ opacity: getOpacity('merged') }}>
                         <div className="space-y-8 animate-pulse">
                            <h3 className="font-mono text-sm bg-white text-black px-2 tracking-widest">{poems.merged.title}</h3>
                            {poems.merged.lines.map((line, i) => (
                                <p key={i} className="font-display font-bold text-4xl md:text-7xl text-white tracking-tighter leading-none glitch-effect">
                                    {line}
                                </p>
                            ))}
                         </div>
                    </div>

                </div>
            </div>

            {/* Static Footer */}
            <div className="mt-12 text-center">
                <p className="font-mono text-[10px] text-gray-600">
                    {ui.drag} <br/>
                    <span className="text-[#8A1C1C]">{frequency < 40 ? ui.receiving_sichuan : frequency > 60 ? ui.receiving_leningrad : ui.interference}</span>
                </p>
            </div>

            <style>{`
                .glitch-effect {
                    text-shadow: 2px 0 #8A1C1C, -2px 0 #2C3E50;
                }
            `}</style>
        </section>
    );
};

export default SignalInterference;