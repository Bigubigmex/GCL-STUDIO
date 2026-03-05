import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Magnet from './Magnet';

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6 mix-blend-difference text-white"
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tighter">
          GCL STUDIO
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Projetos', 'Processo', 'Sobre'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace('projetos', 'work').replace('processo', 'process').replace('sobre', 'about'))}
              className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <Magnet>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Pedir orçamento</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Magnet>
      </div>
    </motion.header>
  );
}
