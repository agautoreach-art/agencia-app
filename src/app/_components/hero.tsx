// src/app/_components/hero.tsx
"use client"; // Diretiva para tornar o componente um Client Component

import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#001f3d] text-white py-20 px-4">

      {/* Estrelas flutuando */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="animate-pulse absolute top-2 left-10 text-yellow-500">★</div>
        <div className="animate-pulse absolute top-20 right-10 text-blue-400">★</div>
        <div className="animate-bounce absolute top-48 left-32 text-pink-400">★</div>
        <div className="animate-bounce absolute bottom-10 right-20 text-green-500">★</div>
        <div className="animate-pulse absolute top-60 left-48 text-white">★</div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto text-center relative z-20">

        {/* Título */}
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white mb-6">
          Aumente as vendas da <br />sua loja de carros <br /> sem perder tempo com <br /> leads desqualificados.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
         Alcance clientes compradores com estratégias de <br className="font-extra-bold" />tráfego pago e aumente suas vendas.<br />
        </p>

        {/* Botão de CTA */}
        <div className="flex justify-center py-10 mb-10">
          <a
            href='#formulario'
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-sm text-lg hover:bg-green-600 transition duration-300"
          >
            Quero saber mais
          </a>
        </div>

      </div>

      {/* Flecha pontilhada animada */}
      <div className="absolute bottom-20 left-1/2 transform py-38 -translate-x-1/2 animate-pulse z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" className="text-white">
          <path d="M12 2L12 22M12 22L6 16M12 22L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Sombra nos cantos */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg z-0"></div>
    </section>
  );
}
