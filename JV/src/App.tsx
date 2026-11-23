import { FormEvent, useState } from "react";
import heroImage from "./assets/fernandes-hero.png";

const services = [
  {
    number: "01",
    title: "Corte & estilo",
    description: "Um corte pensado para valorizar seus traços, sua textura e sua rotina.",
    time: "a partir de 60 min",
  },
  {
    number: "02",
    title: "Cor & iluminação",
    description: "Tons naturais e luminosos, criados com técnica e cuidado em cada detalhe.",
    time: "a partir de 120 min",
  },
  {
    number: "03",
    title: "Tratamentos",
    description: "Protocolos personalizados para devolver força, brilho e movimento aos fios.",
    time: "a partir de 45 min",
  },
];

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
    <path
      d="M5 12h13M14 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Instagram = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.7" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="overflow-hidden bg-[#fbf8f4] text-[#2c2522]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-16 lg:py-7">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Fernandes Beauty Lounge — início"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2c2522]/50 font-serif text-2xl italic">
              F
            </span>
            <span className="leading-none">
              <span className="block font-serif text-xl tracking-[0.08em]">FERNANDES</span>
              <span className="mt-1 block text-[8px] font-semibold tracking-[0.36em] text-[#8a6f65]">
                BEAUTY LOUNGE
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegação principal">
            {[
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Experiência", "#experiencia"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link text-xs font-semibold uppercase tracking-[0.18em]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#agendar"
            className="hidden items-center gap-3 rounded-full bg-[#2c2522] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#b56f78] lg:flex"
          >
            Agendar horário <Arrow />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2c2522]/25 lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1 h-px w-5 bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-1 left-0 h-px w-5 bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            className="mx-5 rounded-3xl border border-[#eaded7] bg-[#fbf8f4] p-6 shadow-xl lg:hidden"
            aria-label="Navegação mobile"
          >
            {[
              ["Sobre", "#sobre"],
              ["Serviços", "#servicos"],
              ["Experiência", "#experiencia"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block border-b border-[#e7d9d2] py-4 font-serif text-2xl"
              >
                {label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#2c2522] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white"
            >
              Agendar horário <Arrow />
            </a>
          </nav>
        )}
      </header>

      <section
        id="inicio"
        className="relative min-h-[760px] bg-[#eadfd7] pt-28 lg:min-h-screen lg:pt-0"
      >
        <div className="mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-10 px-5 pb-10 md:px-10 lg:min-h-screen lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:pb-0">
          <div className="relative z-10 max-w-2xl pt-10 lg:pt-20">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#9b626a]">
              <span className="h-px w-10 bg-current" /> Sua beleza, sua essência
            </p>
            <h1 className="font-serif text-[clamp(4rem,8.5vw,8.8rem)] leading-[0.78] tracking-[-0.055em]">
              Beleza que
              <span className="block translate-x-[8%] italic text-[#b56f78]">transforma.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-[#5f524d] md:text-base">
              Um espaço criado para cuidar de você com leveza, técnica e um olhar único para a sua
              essência.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://wa.me/5563991317057?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Fernandes%20Beauty%20Lounge%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-full bg-[#2c2522] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5 hover:bg-[#b56f78]"
              >
                Agendar pelo WhatsApp <Arrow />
              </a>
              <a
                href="#servicos"
                className="border-b border-[#2c2522]/50 pb-1 text-xs font-semibold uppercase tracking-[0.15em]"
              >
                Conheça os serviços
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto lg:mt-20">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-[#b56f78]/35 md:h-52 md:w-52" />
            <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[48%_48%_2rem_2rem] md:w-[82%]">
              <img
                src={new URL("./imports/WhatsApp_Image_2026-11-23_at_11.01.25.jpeg", import.meta.url).href}
                alt="Cliente com cabelos longos e ondas finalizadas"
                className="h-full w-full border-0 object-cover shadow-[0_4px_2px_rgba(0,0,0,0.25),inset_0_4px_3px_rgba(0,0,0,0.25)] backdrop-blur-[4px]"
              />
            </div>
            <div className="absolute bottom-8 left-0 max-w-44 rounded-2xl bg-[#fbf8f4]/95 p-5 shadow-[0_18px_45px_rgba(65,44,36,.12)] backdrop-blur">
              <span className="font-serif text-3xl italic text-[#b56f78]">Seu momento</span>
              <p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#76615a]">
                Cuidado que começa de dentro
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 hidden h-28 w-[28%] rounded-tr-[6rem] bg-[#fbf8f4] lg:block" />
      </section>

      <section id="sobre" className="px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="eyebrow">Fernandes Beauty Lounge</p>
            <p className="mt-8 max-w-xs text-sm leading-7 text-[#74645e]">
              Mais que um salão, um refúgio para desacelerar e se reencontrar.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] md:text-6xl">
              Acreditamos que cada mulher carrega uma beleza{" "}
              <em className="font-normal text-[#b56f78]">singular.</em>
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#d8c8c0] pt-8 text-sm leading-7 text-[#74645e] md:grid-cols-2">
              <p>
                Por isso, cada atendimento começa com escuta. Entendemos sua rotina, seu estilo e o
                que faz você se sentir verdadeiramente bem.
              </p>
              <p>
                Unimos técnica, sensibilidade e produtos de excelência para criar resultados bonitos
                no salão e possíveis na vida real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="bg-[#2c2522] px-5 py-24 text-[#fffaf5] md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow !text-[#d89aa2]">Nossos cuidados</p>
              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none tracking-[-0.04em] md:text-7xl">
                Serviços pensados para você.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#c8bbb5]">
              Escolha seu momento. Nós cuidamos de todos os detalhes.
            </p>
          </div>

          <div className="mt-16 border-t border-white/15">
            {services.map((service) => (
              <article
                key={service.number}
                className="service-row grid gap-5 border-b border-white/15 py-9 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8"
              >
                <span className="text-xs tracking-[0.2em] text-[#d89aa2]">{service.number}</span>
                <h3 className="font-serif text-3xl md:text-4xl">{service.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-[#c8bbb5]">{service.description}</p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d89aa2]">
                  {service.time}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-[#efe4dc] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden rounded-[2rem]">
              <img
                src={heroImage}
                alt=""
                className="h-full w-full scale-125 border-0 object-cover object-[70%_40%] filter-none"
              />
            </div>
            <div className="absolute -bottom-7 -right-2 flex h-28 w-28 rotate-6 items-center justify-center rounded-full border-0 bg-[#b56f78] text-center text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-white md:right-8 md:h-36 md:w-36">
              Feito para
              <br />
              você
            </div>
          </div>
          <div>
            <p className="eyebrow">A experiência Fernandes</p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Você no centro de tudo.
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-[#6f5d56] md:text-base">
              Do primeiro café ao toque final, queremos que você se sinta acolhida. Com tempo,
              privacidade e atenção genuína, transformamos seu cuidado em um ritual.
            </p>
            <blockquote className="mt-10 border-l border-[#b56f78] pl-6 font-serif text-2xl italic leading-9 text-[#574640]">
              “Beleza é se reconhecer no espelho e amar o que vê.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="agendar" className="bg-[#fbf8f4] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[2rem] bg-[#dca8ae] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-14 lg:p-16">
            <p className="eyebrow !text-[#744b51]">Reserve seu momento</p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Vamos cuidar de você?
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#65474a]">
              Conte um pouco do que você deseja e entraremos em contato para encontrar o melhor
              horário.
            </p>
          </div>
          <div className="bg-white/85 p-8 md:p-14 lg:p-16">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-start justify-center">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#dca8ae] text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="m6 12 4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="font-serif text-4xl">Pedido recebido.</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#74645e]">
                  Obrigada! Entraremos em contato para confirmar os detalhes do seu atendimento.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 text-xs font-bold uppercase tracking-[0.15em] underline underline-offset-4"
                >
                  Fazer outro pedido
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <label className="form-label">
                  Seu nome
                  <input
                    required
                    name="nome"
                    placeholder="Como podemos te chamar?"
                    className="form-field"
                  />
                </label>
                <label className="form-label">
                  WhatsApp
                  <input
                    required
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="form-field"
                  />
                </label>
                <label className="form-label">
                  O que você deseja?
                  <select required name="servico" defaultValue="" className="form-field">
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    <option>Corte & estilo</option>
                    <option>Cor & iluminação</option>
                    <option>Tratamentos</option>
                    <option>Quero uma avaliação</option>
                  </select>
                </label>
                <button className="mt-2 flex items-center justify-center gap-4 rounded-full bg-[#2c2522] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#b56f78]">
                  Solicitar horário <Arrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-[#2c2522] px-5 pb-8 pt-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 border-b border-white/15 pb-16 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 font-serif text-2xl italic">
                  F
                </span>
                <span>
                  <span className="block font-serif text-xl tracking-[0.08em]">FERNANDES</span>
                  <span className="block text-[8px] tracking-[0.36em] text-[#dca8ae]">
                    BEAUTY LOUNGE
                  </span>
                </span>
              </div>
              <p className="mt-6 max-w-xs text-xs leading-6 text-[#bcaeaa]">
                Beleza, cuidado e leveza em cada detalhe.
              </p>
            </div>
            <div>
              <p className="footer-title">Atendimento</p>
              <p className="mt-5 text-sm leading-7 text-[#bcaeaa]">
                Terça a sábado
                <br />
                Das 9h às 19h
              </p>
            </div>
            <div>
              <p className="footer-title">Acompanhe</p>
              <a
                href="#inicio"
                className="mt-5 inline-flex items-center gap-3 text-sm text-[#bcaeaa] transition hover:text-white"
              >
                <Instagram /> @fernandesbeautylounge
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[10px] uppercase tracking-[0.14em] text-[#8d807c] md:flex-row md:justify-between">
            <span>© 2025 Fernandes Beauty Lounge</span>
            <span>Feito com cuidado, como tudo por aqui</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
