"use client"
import { Handshake, MessageCircle, DollarSign, RefreshCw } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

// Dados das etapas
const ciclodevendas = [
  {
    titulo: "Aquisição",
    descricao: "Atrair clientes qualificados para sua loja de carros.",
    icone: <Handshake className="h-8 w-8 text-[#002f6b] mb-4" />,
  },
  {
    titulo: "Engajamento",
    descricao: "Despertar interesse com anúncios estratégicos.",
    icone: <MessageCircle className="h-8 w-8 text-[#002f6b] mb-4" />,
  },
  {
    titulo: "Monetização",
    descricao: "Converter acessos em vendas reais de veículos.",
    icone: <DollarSign className="h-8 w-8 text-[#002f6b] mb-4" />,
  },
  {
    titulo: "Retenção",
    descricao: "Fidelizar e incentivar recompra ou indicações.",
    icone: <RefreshCw className="h-8 w-8 text-[#002f6b] mb-4" />,
  },
];

export function CicloDeVendas() {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-[#002f6b] mb-4">
        Processos de Vendas para Lojas de Carro
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Sua loja precisa de uma estratégia que acompanhe o cliente em toda a jornada de compra — do clique até a fidelização.
      </p>

      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12 items-center justify-center">
          {ciclodevendas.map((etapa, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow-md transition hover:scale-105 duration-300"
            >
              <div>{etapa.icone}</div>
              <h3 className="text-xl font-semibold mb-2">{etapa.titulo}</h3>
              <p className="text-gray-600 text-sm">{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto mt-10 mb-12">
        Se você está buscando uma agência de marketing para impulsionar sua loja, talvez seja a hora de considerar um modelo mais eficiente: a assessoria de marketing.
        <br />
        Diferente de uma agência de marketing tradicional, nossa assessoria foca na construção e otimização de estratégias baseadas em dados e performance.
      </p>

      <div className="flex justify-center">
        <a
          data-aos="fade-up"
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/5541996855407?text=Olá, vim através do site e tenho interesse nos serviços da Auto Reach."
          className="flex w-fit items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#1e293b] to-[#003366] px-5 py-2 text-white transition hover:bg-[#001f4c]"
        >
          <WhatsappLogoIcon className="h-5 w-5 text-white" />
          Fale com um especialista
        </a>
      </div>
    </section>
  );
}
