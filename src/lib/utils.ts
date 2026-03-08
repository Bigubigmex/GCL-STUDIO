import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    slug: "agendamento-rapido",
    title: "Agendamentos Rápidos",
    type: "Clínica ou Estética",
    year: "2025",
    thumbnail: "https://picsum.photos/seed/atlas/1600/1000",
    demoUrl: "/demos/agendamento-rapido",
    objective: "Estrutura focada em fazer o cliente agendar horário sem enrolação.",
    stack: ["WhatsApp Direto", "Carregamento Instantâneo", "Mobile First"],
    results: ["Mais agendamentos", "Menos perguntas repetitivas"],
    microResult: "agenda cheia",
  },
  {
    slug: "orcamento-whatsapp",
    title: "Orçamentos no WhatsApp",
    type: "Delivery ou Loja",
    year: "2025",
    thumbnail: "https://picsum.photos/seed/verde/1600/1000",
    demoUrl: "/demos/orcamento-whatsapp",
    objective: "Página direta para o cliente montar o pedido e mandar no Zap.",
    stack: ["Catálogo Rápido", "Botão Flutuante", "Zero Fricção"],
    results: ["Pedidos mais rápidos", "Cliente não desiste"],
    microResult: "mais pedidos",
  },
  {
    slug: "autoridade-servicos",
    title: "Autoridade e Serviços",
    type: "Oficina ou Advogado",
    year: "2024",
    thumbnail: "https://picsum.photos/seed/nexo/1600/1000",
    demoUrl: "/demos/autoridade-servicos",
    objective: "Apresentação profissional para justificar seu preço e passar confiança.",
    stack: ["Design Sóbrio", "Prova Social", "SEO Local"],
    results: ["Cliente confia mais", "Menos pedido de desconto"],
    microResult: "mais confiança",
  },
];
