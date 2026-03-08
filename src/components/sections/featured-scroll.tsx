"use client";

import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import Magnet from "../Magnet";

export default function FeaturedScroll() {
  return (
    <section className="flex flex-col overflow-hidden bg-[var(--bg)]">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--accent)]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent)]">
                  DESIGN + ENGENHARIA FRONTEND
                </span>
                <div className="h-px w-8 bg-[var(--accent)]" />
              </div>
              
              <h2 className="text-4xl md:text-7xl font-semibold text-[var(--text)] tracking-tight leading-[1.1] mb-6">
                Ter um Instagram legal <br />
                <span className="text-[var(--mutedText)]">não é mais o suficiente.</span>
              </h2>
              
              <div className="max-w-xl mx-auto text-lg text-[var(--mutedText)] mb-8 leading-relaxed text-left space-y-4">
                <p><strong className="text-white">Invisibilidade:</strong> Se o cliente te procura no Google e não te acha, para ele, você não existe.</p>
                <p><strong className="text-white">Falta de confiança:</strong> Sem um site, você parece pequeno. O cliente vê isso e pede desconto. Com um site profissional, você cobra o quanto vale.</p>
                <p><strong className="text-white">Ralo de dinheiro:</strong> Se você anuncia e manda a pessoa para um perfil bagunçado, você está jogando seu dinheiro no lixo. O site é o lugar onde o clique vira pedido de orçamento.</p>
              </div>

              <Magnet>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--surface)] border border-[var(--stroke)] text-[var(--text)] font-medium rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 group"
                >
                  <span>Pedir orçamento</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnet>
            </div>
          </>
        }
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0B0F14]">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#1A1F26] flex items-center px-4 gap-2 border-b border-[var(--stroke)]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <div className="ml-4 w-64 h-4 bg-[#0B0F14] rounded-full opacity-50" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Featured Website Project"
            className="mx-auto h-full object-cover object-left-top mt-8"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>
      </ContainerScroll>
    </section>
  );
}
