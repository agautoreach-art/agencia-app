"use client";

import Image from "next/image";
import notebook from '../../../public/Notebook.png'
import cliente from '../../../public/Cliente.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-white py-0 md:py-20 text-[#002f6b] mb-15">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Imagem */}
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={notebook}
                alt="Notebook"
                fill
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-[#002f6b]">
              <Image
                src={cliente}
                alt="Cliente"
                fill
                priority
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">Transforme Sua Loja com Tráfego Pago</h2>

            <p className="text-gray-600">
              Somos uma agência especializada em tráfego pago, focada em gerar resultados para lojas de veículos. Nossa missão é transformar seu investimento em resultados reais, aumentando suas vendas de forma escalável no ambiente digital.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-[#002f6b]" />
                Especializados em Tráfego Pago para Lojas de Veículos
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#002f6b]" />
                Mais de 2 milhões gerenciados em campanhas digitais
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#002f6b]" />
                Estratégias personalizadas para impulsionar suas vendas
              </li>
            </ul>

            <div className="flex gap-2">
              <a 
                target='_blank'
                href={`https://wa.me/5541996855407?text=Olá, vim através do site e tenho interesse nos serviços de Tráfego Pago para Lojas de Carros.`} 
                className="bg-gradient-to-r from-[#1e293b] to-[#003366] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Agendar reunião
              </a>

              {/* Como você mencionou que não tem escritório físico, eu alterei para um link mais informativo */}
              <a 
                target='_blank'
                href="https://maps.app.goo.gl/RrDGaTrqu54LezNv5"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-[#002f6b] border border-[#002f6b]"
              >
                <MapPin className="w-5 h-5" />
                Localização do Serviço
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
