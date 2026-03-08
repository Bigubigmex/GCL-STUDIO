import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedScroll from '../components/sections/featured-scroll.tsx';
import SelectedWork from '../components/SelectedWork';
import BeforeAfterSection from '../components/BeforeAfterSection';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import Cursor from '../components/Cursor';
import SmoothScroll from '../components/SmoothScroll';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
        <Cursor />
        <Header />
        
        <main>
          <Hero />
          <FeaturedScroll />
          <SelectedWork onProjectClick={setSelectedProject} />
          <BeforeAfterSection />
          <Process />
          <About />
          <Contact />
        </main>
        
        <Footer />
        
        <ProjectModal 
          projectSlug={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </SmoothScroll>
  );
}
