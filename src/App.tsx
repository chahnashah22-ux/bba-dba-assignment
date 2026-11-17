/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactFooter } from './components/ContactFooter';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <CapabilitiesSection />
      </main>
      <ContactFooter />
    </div>
  );
}
