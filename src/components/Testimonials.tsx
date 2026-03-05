import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f0f26] to-[#0a0a1a] p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote size={120} />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
            <div className="flex-1">
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "Neon Labs completely transformed our digital presence. Their creativity, attention to detail, and technical expertise are unmatched. They didn't just build a website; they built a growth engine."
              </h3>
              
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/seed/ceo/100/100"
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-lg">Alex Morgan</p>
                  <p className="text-blue-400">CEO, FinTech Solutions</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="text-center md:text-left">
              <p className="text-4xl font-bold text-white mb-1">4.9</p>
              <div className="flex gap-0.5 text-yellow-500 justify-center md:justify-start mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill="currentColor" size={14} />
                ))}
              </div>
              <p className="text-sm text-gray-400">Based on 120+ reviews</p>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="h-6 bg-white/20 w-20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
