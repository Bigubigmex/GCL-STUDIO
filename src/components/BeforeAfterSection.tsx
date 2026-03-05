import { motion } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--stroke)]">
      <div className="container-custom">
        <div className="mb-16 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Antes vs Depois.
            <br />
            <span className="text-[var(--mutedText)]">O mesmo negócio. Outra percepção.</span>
          </motion.h2>
          <p className="max-w-xl">
            Re-design não é “embelezar”. É organizar atenção, reduzir fricção e aumentar intenção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider 
              beforeImage="https://picsum.photos/seed/old1/1600/1000?grayscale" 
              afterImage="https://picsum.photos/seed/new1/1600/1000" 
              alt="Website Redesign 1" 
            />
            <div className="mt-4 flex justify-between text-sm text-[var(--mutedText)]">
              <span>Landing Page Antiga</span>
              <span>Nova Estrutura de Conversão</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BeforeAfterSlider 
              beforeImage="https://picsum.photos/seed/old2/1600/1000?grayscale" 
              afterImage="https://picsum.photos/seed/new2/1600/1000" 
              alt="Website Redesign 2" 
            />
            <div className="mt-4 flex justify-between text-sm text-[var(--mutedText)]">
              <span>Dashboard Legado</span>
              <span>Nova UI System</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
