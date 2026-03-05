import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { projects } from '../lib/utils';
import Magnet from './Magnet';

interface ProjectModalProps {
  projectSlug: string | null;
  onClose: () => void;
}

export default function ProjectModal({ projectSlug, onClose }: ProjectModalProps) {
  const project = projects.find(p => p.slug === projectSlug);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeReady, setIframeReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>('preview');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (projectSlug) {
      document.body.style.overflow = 'hidden';
      // Reset states
      setIsLoading(true);
      setIframeReady(false);
      setShowFallback(false);
      setActiveTab('preview');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [projectSlug]);

  useEffect(() => {
    if (!projectSlug) return;

    // Timeout for fallback
    const timer = setTimeout(() => {
      if (!iframeReady) {
        setShowFallback(true);
        setIsLoading(false);
      }
    }, 5000); // 5 seconds timeout

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'DEMO_READY' && event.data?.slug === projectSlug) {
        setIframeReady(true);
        setIsLoading(false);
        clearTimeout(timer);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, [projectSlug, iframeReady]);

  const handleIframeLoad = () => {
    // Basic load check, but postMessage is better for "app ready"
    // If we haven't received ready yet, we wait a bit more or rely on timeout
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {projectSlug && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F14]/95 backdrop-blur-sm p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.98, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full max-w-[1600px] bg-[#0B0F14] border border-[var(--stroke)] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="h-16 border-b border-[var(--stroke)] flex items-center justify-between px-6 bg-[#0B0F14] z-10">
              <div className="flex items-center gap-6">
                <h2 className="text-lg font-medium tracking-tight">{project.title}</h2>
                <div className="hidden md:flex items-center gap-1 bg-[var(--surface)] p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all relative ${activeTab === 'preview' ? 'text-[var(--bg)]' : 'text-[var(--mutedText)] hover:text-white'}`}
                  >
                    {activeTab === 'preview' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[var(--accent)] rounded-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all relative ${activeTab === 'details' ? 'text-[var(--bg)]' : 'text-[var(--mutedText)] hover:text-white'}`}
                  >
                    {activeTab === 'details' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[var(--accent)] rounded-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">Detalhes</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.demoUrl} // In a real app, this might be the external URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 text-sm text-[var(--mutedText)] hover:text-white transition-colors"
                >
                  Abrir em nova aba <ExternalLink size={14} />
                </a>
                <Magnet>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--stroke)] hover:bg-[var(--surface2)] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </Magnet>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative overflow-hidden bg-[var(--surface)]">
              {activeTab === 'preview' ? (
                <div className="w-full h-full relative">
                  {isLoading && !showFallback && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="flex flex-col items-center gap-4">
                        <Loader2 className="animate-spin text-[var(--accent)]" size={32} />
                        <p className="text-sm text-[var(--mutedText)]">Carregando demo...</p>
                      </div>
                    </div>
                  )}

                  {showFallback ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0B0F14] p-8 text-center">
                      <img 
                        src={project.thumbnail} 
                        alt="Fallback" 
                        className="w-full max-w-2xl h-auto object-cover rounded-lg opacity-50 mb-8 border border-[var(--stroke)]"
                        referrerPolicy="no-referrer"
                      />
                      <h3 className="text-xl font-medium mb-2">Preview indisponível</h3>
                      <p className="text-[var(--mutedText)] max-w-md mb-8">
                        Esse preview pode falhar em alguns navegadores devido a restrições de iframe. 
                        Você ainda pode abrir em nova aba.
                      </p>
                      <div className="flex gap-4">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-[var(--surface2)] border border-[var(--stroke)] rounded-lg hover:border-[var(--accent)] transition-colors text-sm font-medium"
                        >
                          Abrir em nova aba
                        </a>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      ref={iframeRef}
                      src={project.demoUrl}
                      className={`w-full h-full border-0 transition-opacity duration-500 ${iframeReady ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={handleIframeLoad}
                      title={`${project.title} Demo`}
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-full overflow-y-auto p-8 md:p-16">
                  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-micro text-[var(--mutedText)] mb-4">OBJETIVO</h3>
                      <p className="text-lg mb-8">{project.objective}</p>
                      
                      <h3 className="text-micro text-[var(--mutedText)] mb-4">STACK</h3>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full border border-[var(--stroke)] text-sm bg-[var(--surface)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-micro text-[var(--mutedText)] mb-4">RESULTADOS</h3>
                      <ul className="space-y-4">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[var(--accent)] mt-1">●</span>
                            <span className="text-lg">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-12">
                        <a href="#contact" onClick={onClose} className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold rounded-lg hover:bg-white transition-colors w-full md:w-auto">
                          Quero algo nesse nível
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
