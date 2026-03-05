import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 border border-[var(--stroke)] rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-[var(--strokeStrong)] rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[var(--accent)] rounded-full blur-[80px] opacity-20" />
            <h3 className="text-9xl font-display font-bold text-[var(--strokeStrong)] select-none">GCL</h3>
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            Design com engenharia.
            <br />
            <span className="text-[var(--mutedText)]">Eu cuido do visual e do código.</span>
          </motion.h2>
          
          <div className="space-y-6 text-lg text-[var(--mutedText)]">
            <p>
              Sou <span className="text-white font-medium">GCL Studio</span>, designer e dev focado em sites premium para negócios que precisam parecer grandes e converter melhor.
            </p>
            <p>
              Meu trabalho é traduzir valor em interface: tipografia forte, ritmo, motion sutil e performance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Hierarquia antes de estética.",
              "Detalhe é produto.",
              "Performance é parte do design."
            ].map((item, i) => (
              <div key={i} className="border-l border-[var(--accent)] pl-4">
                <p className="text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
