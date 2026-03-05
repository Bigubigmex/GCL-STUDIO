import { useEffect } from 'react';
import { useRoute } from 'wouter';
import { projects } from '../lib/utils';

export default function Demo() {
  const [match, params] = useRoute('/demos/:slug');
  const slug = params?.slug;
  const project = slug ? projects.find(p => p.slug === slug) : undefined;

  useEffect(() => {
    if (!slug) return;
    
    // Simulate "Ready" state for the iframe communication
    const timer = setTimeout(() => {
      window.parent.postMessage({ type: 'DEMO_READY', slug }, '*');
    }, 1500);

    return () => clearTimeout(timer);
  }, [slug]);

  if (!project) return <div className="p-8 text-white">Projeto não encontrado</div>;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full mb-4">
          DEMO INTERNA
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{project.title}</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Esta é uma página de demonstração simulada para o projeto {project.title}.
          Em um ambiente real, aqui estaria o site completo do cliente.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className="p-6 bg-gray-100 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-blue-600">100%</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-500">Performance</div>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-green-600">A+</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-500">SEO Score</div>
          </div>
        </div>

        <div className="mt-12 p-4 border-t border-gray-200 text-sm text-gray-400">
          Visualizando em modo iframe • {project.year}
        </div>
      </div>
    </div>
  );
}
