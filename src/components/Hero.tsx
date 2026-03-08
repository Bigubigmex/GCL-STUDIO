import { GclEtherealHeroBg } from './ui/gcl-ethereal-hero-bg';

export default function Hero() {
  return (
    <section className="bg-[#0B0F14] px-6 pb-16 pt-28 text-white">
      <div className="mx-auto max-w-7xl">
        <GclEtherealHeroBg
          className="min-h-[620px] rounded-[32px] border border-white/10"
          color="rgba(57,255,20,0.14)"
          animation={{ scale: 60, speed: 55 }}
          noise={{ opacity: 0.08, scale: 1 }}
        >
          <div className="flex min-h-[620px] items-center justify-center px-6 py-16 md:px-12 lg:px-16">
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <p className="mb-6 inline-flex rounded-full border border-[#39FF14]/20 bg-[#39FF14]/10 px-4 py-2 text-sm text-[#D8FFD0]">
                Geralmente respondo em até 1 hora.
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                Você está deixando dinheiro na mesa todos os dias por não ter um site que vende.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/72 md:text-lg">
                Se você não tem um site profissional, o cliente entra no seu Instagram, não entende rápido, não confia e fecha com o concorrente. Eu crio a página certa para parar de depender só de indicação e começar a receber orçamentos e agendamentos com clareza.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#39FF14] px-6 py-3 text-sm font-semibold text-[#071006] transition hover:translate-y-[-1px]"
                >
                  Quero um orçamento no WhatsApp
                </a>

                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </GclEtherealHeroBg>
      </div>
    </section>
  );
}
