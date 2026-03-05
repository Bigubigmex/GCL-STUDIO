import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Magnet from './Magnet';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-32 pb-20">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
        
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="text-micro text-[var(--accent)]">DESIGN + ENGENHARIA FRONTEND</span>
            <div className="h-px w-12 bg-[var(--strokeStrong)]" />
          </motion.div>

          <h1 className="mb-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Sites que parecem caros.
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-[var(--mutedText)]"
              >
                E vendem como tal.
              </motion.div>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-lg md:text-xl mb-12"
          >
            Eu desenho e construo experiências digitais rápidas, tipográficas e cirúrgicas — feitas para converter, não para “encher portfólio”.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <Magnet>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold rounded-lg hover:bg-white transition-colors"
              >
                Pedir orçamento no WhatsApp
              </a>
            </Magnet>
            <Magnet>
              <a 
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--stroke)] text-white font-medium rounded-lg hover:bg-[var(--surface2)] transition-colors"
              >
                Ver projetos selecionados
              </a>
            </Magnet>
          </motion.div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          {[
            "Motion premium (Framer) sem pesar performance.",
            "Next.js + TypeScript + estrutura escalável.",
            "Ritmo, grid e detalhes de estúdio — nada de template."
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + (i * 0.1) }}
              className="p-4 border border-[var(--stroke)] bg-[var(--surface)] rounded-lg"
            >
              <p className="text-sm text-[var(--mutedText)]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Grid Trace */}
      <div className="absolute bottom-12 right-12 hidden md:block opacity-20">
        <div className="flex gap-2 text-[10px] font-mono">
          <span>X: 1204</span>
          <span>Y: 0842</span>
        </div>
      </div>
    </section>
  );
}
