import { motion } from 'motion/react';
import { projects } from '../lib/utils';
import Magnet from './Magnet';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onProjectClick: (slug: string) => void;
}

export default function SelectedWork({ onProjectClick }: SelectedWorkProps) {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Projetos focados em uma única coisa:
            <br />
            <span className="text-[var(--mutedText)]">resultado.</span>
          </motion.h2>
          <p className="max-w-md">
            Eu não preciso de 50 modelos para te enrolar. Eu faço páginas objetivas, que explicam seu serviço e puxam o cliente para ação. Veja o que eu já entreguei:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onProjectClick(project.slug)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--stroke)] bg-[var(--surface)] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-6 py-3 bg-[var(--bg)]/90 backdrop-blur-sm rounded-full border border-[var(--stroke)] flex items-center gap-2">
                    <span className="text-sm font-medium">Abrir preview</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <span className="text-xs font-mono text-[var(--mutedText)] border border-[var(--stroke)] px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>
              
              <p className="text-sm text-[var(--mutedText)] mb-3">{project.type}</p>
              
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent)] bg-[var(--accentSoft)] px-3 py-1 rounded-full">
                {project.microResult}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
