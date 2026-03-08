import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      desc: "Conversamos 15 minutos para eu entender o que você vende e quem é seu cliente."
    },
    {
      number: "02",
      title: "Construção",
      desc: "Eu monto toda a estrutura focada em facilitar o contato do seu cliente."
    },
    {
      number: "03",
      title: "Entrega",
      desc: "Você aprova, eu coloco no ar e seu negócio passa a ter uma máquina de vendas 24h."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              Sem enrolação.
              <br />
              <span className="text-[var(--mutedText)]">Seu site no ar para começar a gerar contato.</span>
            </motion.h2>
            <p className="mb-12 text-lg">
              Um fluxo enxuto que protege prazo e eleva qualidade.
            </p>

            <div className="p-8 border border-[var(--stroke)] rounded-xl bg-[var(--surface)]">
              <h4 className="text-micro mb-6 text-[var(--accent)]">O QUE VOCÊ RECEBE</h4>
              <ul className="space-y-3">
                {[
                  "Layout sob medida",
                  "Componentes reaproveitáveis",
                  "Animações premium",
                  "Otimização de performance",
                  "SEO básico + tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:gap-12 group"
              >
                <span className="text-4xl md:text-6xl font-display font-bold text-[var(--strokeStrong)] group-hover:text-[var(--accent)] transition-colors duration-500">
                  {step.number}
                </span>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
                  <p className="text-[var(--mutedText)]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
