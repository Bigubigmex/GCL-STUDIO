import { motion } from 'motion/react';
import { Globe, Users, Zap } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050511]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
              Design is not just about aesthetics, it's about <span className="inline-block w-8 h-8 rounded-full bg-blue-600 align-middle mx-1 animate-pulse" /> creating meaningful <span className="inline-block w-8 h-8 rounded-full bg-purple-600 align-middle mx-1 animate-pulse delay-75" /> experiences that connect, inspire, and convert.
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <img
                src="https://picsum.photos/seed/sarah/100/100"
                alt="Sarah Whitman"
                className="w-12 h-12 rounded-full border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold">Sarah Whitman</p>
                <p className="text-sm text-gray-400">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: "2K+", label: "Projects Delivered", icon: Zap },
              { number: "3K+", label: "Happy Clients", icon: Users },
              { number: "15+", label: "Industry Awards", icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center sm:text-left"
              >
                <stat.icon className="w-8 h-8 text-blue-500 mb-4 mx-auto sm:mx-0" />
                <h3 className="text-4xl font-display font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
