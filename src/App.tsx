import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AppExperienceSection } from './components/AppExperienceSection';
import { PrivacySection } from './components/PrivacySection';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AppDownloadModal } from './components/AppDownloadModal';

export function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Global Navigation Header */}
      <Navbar onOpenDownloadModal={() => setDownloadModalOpen(true)} />

      {/* Product Story — Cinematic Narrative Flow */}
      <main className="flex-grow">
        {/* ACT 1 — The World & The Problem (Hero: cinematic scene) */}
        <HeroSection onOpenDownloadModal={() => setDownloadModalOpen(true)} />

        {/* ACT 2 — The Tension (why old methods fail) */}
        <ProblemSection />

        {/* ACT 3 — The Solution Reveal */}
        <SolutionSection />

        {/* ACT 4 — The Journey (3-step process chapters) */}
        <HowItWorksSection />

        {/* ACT 5 — The Product (app showcase) */}
        <AppExperienceSection onOpenDownloadModal={() => setDownloadModalOpen(true)} />

        {/* ACT 6 — The Trust (privacy & security) */}
        <PrivacySection />

        {/* ACT 7 — The Foundation (tech stack) */}
        <FeaturesSection />

        {/* ACT 8 — Frequently Asked Questions */}
        <FaqSection />

        {/* ACT 9 — Professional Contact Form */}
        <ContactSection />

        {/* ACT 10 — The Call to Action */}
        <CtaSection onOpenDownloadModal={() => setDownloadModalOpen(true)} />
      </main>

      {/* Premium Footer */}
      <Footer onOpenDownloadModal={() => setDownloadModalOpen(true)} />

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}

export default App;
