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
            Um investimento que pode se pagar
            <br />
            <span className="text-[var(--mutedText)]">com poucos clientes novos.</span>
          </motion.h2>
          <div className="max-w-xl space-y-4 text-[var(--mutedText)]">
            <p>
              Quanto vale um cliente novo para você hoje? O site custa entre R$ 500 e R$ 1.000, investimento único. Isso significa que, se o site te trouxer apenas 2 ou 3 clientes novos, ele já se pagou. Todo o resto é lucro para sua empresa.
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Site ultra rápido no celular.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Botão de WhatsApp em destaque.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--accent)]">✓</span> Pronto para receber anúncios.
              </li>
            </ul>
          </div>
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
