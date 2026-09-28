import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PreparationSection } from './components/PreparationSection';
import { JobPortalsSection } from './components/JobPortalsSection';
import { ApplicationRulesSection } from './components/ApplicationRulesSection';
import { RecognitionLanguageSection } from './components/RecognitionLanguageSection';
import { TroubleshootingSection } from './components/TroubleshootingSection';
import { DailyChecklistSection } from './components/DailyChecklistSection';
import { CoverLetterSection } from './components/CoverLetterSection';
import { MoralClosingSection } from './components/MoralClosingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onScrollTo={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onScrollTo={scrollToSection} />

        {/* Bölüm 1: İş Aramaya Başlamadan Önce */}
        <PreparationSection />

        {/* Bölüm 2: İş Nerede Aranır? (6 Güvenilir Site) */}
        <JobPortalsSection />

        {/* Bölüm 3: Başvuru Sürecinde Dikkat Edilecekler & Altın Kurallar */}
        <ApplicationRulesSection />

        {/* Ek Bölüm: Denklik & Dil & 2024 Nitelikli Göç Yasası Beyanı */}
        <RecognitionLanguageSection />

        {/* Bölüm 6 & 7: Motivasyon Mektubu Rehberi & Canlı Şablon */}
        <CoverLetterSection />

        {/* Bölüm 4: İş Bulamayanlar İçin Teşhis ve Çözümler */}
        <TroubleshootingSection />

        {/* Bölüm 5: Günlük Checklist */}
        <DailyChecklistSection />

        {/* Kapanış Moral Notu */}
        <MoralClosingSection onScrollTo={scrollToSection} />

        {/* SSS / FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
