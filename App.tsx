import React, { useEffect } from 'react';
import Hero from './components/Hero';
import WarManifesto from './components/WarManifesto';
import SilenceChamber from './components/SilenceChamber';
import FracturedTimeline from './components/FracturedTimeline';
import TranslationMorph from './components/TranslationMorph';
import ArchiveGallery from './components/ArchiveGallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CensorshipGame from './components/CensorshipGame';
import FogRevealer from './components/FogRevealer';
import EchoesComparison from './components/EchoesComparison';
import HorizontalDualBiography from './components/HorizontalDualBiography';
import SignalInterference from './components/SignalInterference';
import PhonographDistortion from './components/PhonographDistortion';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-8 right-8 z-[9999] font-mono text-xs text-[#E6E4D5] border border-gray-600 px-3 py-1 bg-black/50 backdrop-blur-md hover:bg-[#8A1C1C] hover:border-[#8A1C1C] transition-colors uppercase tracking-widest cursor-pointer"
      data-hover="true"
    >
      {language === 'en' ? 'IT' : 'EN'}
    </button>
  );
}

function MainApp() {
  // Smooth scroll behavior check
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-[#0F0F0F] min-h-screen w-full text-[#E6E4D5] selection:bg-[#8A1C1C] selection:text-white cursor-none">
      <CustomCursor />
      <LanguageToggle />
      
      {/* Global Noise Overlay */}
      <div className="noise-bg pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-overlay"></div>
      
      <main className="w-full">
        <Hero />
        <WarManifesto />

        {/* The Comparison Section 1: The Timeline */}
        <HorizontalDualBiography />
        
        {/* NEW: The Radio Tuner - Active Comparison */}
        <SignalInterference />

        {/* The Comparison Section 2: The Visual Echoes */}
        <EchoesComparison />

        {/* Interaction 1: Clearing the Fog */}
        <FogRevealer />
        
        <SilenceChamber />
        
        {/* NEW: Abstract Break */}
        <PhonographDistortion />
        
        {/* Interaction 2: Fighting Censorship */}
        <CensorshipGame />
        
        <FracturedTimeline />
        <TranslationMorph />
        <ArchiveGallery />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;