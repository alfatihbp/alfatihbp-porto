import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from '@/components/sections/Hero/Hero';
import Marquee from '@/components/common/Marquee/Marquee';
import Projects from '@/components/sections/Projects/Projects';
import Snapshots from '@/components/sections/Snapshots/Snapshots';
import Skills from '@/components/sections/Skills/Skills';
import Contact from '@/components/sections/Contact/Contact';
import Footer from '@/components/layout/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Snapshots />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
