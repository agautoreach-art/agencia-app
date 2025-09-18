"use client";

import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <section className="bg-white py-0 md:py-20 text-[#002f6b] mb-15">
      <div className="container px-4 mx-auto">
        <div className="space-y-6 mt-10 text-center" data-aos="fade-up-left" data-aos-delay="300">
          <h2 className="text-4xl font-bold">Transforme Sua Loja com Tráfego Pago</h2>
          <p className="text-gray-600">
            Somos uma agência especializada em tráfego pago, focada em gerar resultados para lojas de veículos. Nossa missão é transformar seu investimento em resultados reais, aumentando suas vendas de forma escalável no ambiente digital.
          </p>

          {/* Cards */}
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-100 w-[85%] min-h-[280px] p-6 rounded-lg shadow-md flex flex-col items-center text-center relative sm:w-full sm:min-h-0 sm:rounded-xl">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Posicionamento</h3>
              <p>
                Seus veículos viram a primeira opção na mente dos clientes, mesmo em um mercado lotado de concorrentes.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#003366] rounded-b-xl"></div>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-100 w-[85%] min-h-[280px] p-6 rounded-lg shadow-md flex flex-col items-center text-center relative sm:w-full sm:min-h-0 sm:rounded-xl">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Captação de leads</h3>
              <p>
                Você para de perder tempo com curiosos e recebe apenas leads prontos para comprar ou investir.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#f59e0b] rounded-b-xl"></div>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-100 w-[85%] min-h-[280px] p-6 rounded-lg shadow-md flex flex-col items-center text-center relative sm:w-full sm:min-h-0 sm:rounded-xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Gestão comercial</h3>
              <p>
                Cada lead é atendido no momento certo, o que gera mais fichas aprovadas, mais visitas marcadas e mais carros vendidos.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#dc2626] rounded-b-xl"></div>
            </div>

            {/* Card 4 */}
            <div className="bg-neutral-100 w-[85%] min-h-[280px] p-6 rounded-lg shadow-md flex flex-col items-center text-center relative sm:w-full sm:min-h-0 sm:rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Análise de performance</h3>
              <p>
                Você sabe exatamente onde está gastando e onde está lucrando, reduz custos e aumenta conversões.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#16a34a] rounded-b-xl"></div>
            </div>

            {/* Botão de CTA */}
            <div className="w-full flex justify-center sm:col-span-2 md:col-span-4 pt-10 mb-10">
              <a
                href="#formulario"
                className="flex items-center gap-2 px-6 py-3 bg-[#002f6b] text-white rounded-md text-lg hover:bg-green-600 transition duration-300 shadow-md"
              >
                QUERO SABER MAIS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
