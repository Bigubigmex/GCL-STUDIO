import { motion } from 'motion/react';
import Magnet from './Magnet';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--stroke)] bg-[var(--bg)]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-[var(--mutedText)]">
          &copy; {new Date().getFullYear()} GCL Studio. Todos os direitos reservados.
        </div>

        <div className="flex items-center gap-6">
          {['LinkedIn', 'Instagram', 'GitHub'].map((social) => (
            <Magnet key={social}>
              <a 
                href="#" 
                className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
              >
                {social}
              </a>
            </Magnet>
          ))}
        </div>

        <div className="text-xs text-[var(--faintText)] font-mono">
          Construído em Next.js + Motion
        </div>
      </div>
    </footer>
  );
}
