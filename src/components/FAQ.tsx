import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A standard branding project takes 3-5 weeks, while a full website design and development can take 6-12 weeks."
    },
    {
      question: "Do I need to provide all the content?",
      answer: "Not necessarily. We offer copywriting and content strategy services if you need help crafting your message. However, having core content ready can speed up the process."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer ongoing support and maintenance packages to ensure your digital products remain secure, up-to-date, and performant."
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We specialize in React, Next.js, and Tailwind CSS for web applications. For CMS needs, we often work with Sanity, Contentful, or WordPress."
    },
    {
      question: "How do we get started?",
      answer: "Simply fill out the contact form below or book a discovery call. We'll discuss your goals and see if we're a good fit for your project."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-6">
                FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Got questions? <br />
                <span className="text-gray-400">We've got answers.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Everything you need to know about our process, pricing, and deliverables. Can't find what you're looking for? Reach out to us directly.
              </p>
              <button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium">
                Contact Support
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl border transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#0f0f26] border-blue-500/30' 
                      : 'bg-transparent border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400'}`}>
                      {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
