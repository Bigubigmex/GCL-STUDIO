import { motion } from 'motion/react';
import { Palette, Layout, Smartphone, BarChart3, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Intuitive, high-fidelity interfaces that delight users and drive engagement.",
      icon: Layout,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Brand Identity",
      description: "Memorable visual systems that tell your story and distinguish your brand.",
      icon: Palette,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform apps built for performance and scalability.",
      icon: Smartphone,
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Digital Strategy",
      description: "Data-driven insights to supercharge your growth and market positioning.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We blend creativity with technology to build digital experiences that captivate and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0f0f26] border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                  Learn More <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
