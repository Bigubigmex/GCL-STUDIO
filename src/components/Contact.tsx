import { motion } from 'motion/react';
import Magnet from './Magnet';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[var(--stroke)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              Chega de perder venda para quem é menos profissional que você.
            </motion.h2>
            <p className="text-xl mb-12 max-w-md">
              Vamos colocar sua empresa em outro nível ainda essa semana? Clique no botão abaixo e me diga qual o seu objetivo. Eu vou te passar a melhor estratégia para o seu caso.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold mb-2">Respondo em até 1 dia útil.</h4>
                <p className="text-[var(--mutedText)] text-sm">
                  Se preferir, mando um orçamento por áudio.
                </p>
              </div>

              <Magnet>
                <a 
                  href="https://wa.me/1234567890?text=Oi!%20Quero%20garantir%20meu%20site.%20Meu%20neg%C3%B3cio%20%C3%A9%20___" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors"
                >
                  Chamar no WhatsApp e garantir meu site
                </a>
              </Magnet>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-micro text-[var(--mutedText)]">SEU NOME</label>
                <input 
                  type="text" 
                  className="w-full bg-[var(--surface)] border border-[var(--stroke)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="João Silva"
                />
              </div>
              <div className="space-y-2">
                <label className="text-micro text-[var(--mutedText)]">WHATSAPP OU E-MAIL</label>
                <input 
                  type="text" 
                  className="w-full bg-[var(--surface)] border border-[var(--stroke)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-micro text-[var(--mutedText)]">TIPO DE PROJETO</label>
              <select className="w-full bg-[var(--surface)] border border-[var(--stroke)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none">
                <option>Landing Page</option>
                <option>Site Institucional</option>
                <option>E-commerce</option>
                <option>SaaS / App</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-micro text-[var(--mutedText)]">MENSAGEM</label>
              <textarea 
                rows={4}
                className="w-full bg-[var(--surface)] border border-[var(--stroke)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                placeholder="Conte um pouco sobre o projeto..."
              />
            </div>

            <button className="w-full py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              Enviar solicitação <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
