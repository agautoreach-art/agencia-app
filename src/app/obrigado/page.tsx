'use client'
import React from 'react'
import Link from 'next/link'

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-[#021d30] text-white flex flex-col items-center justify-center px-4 pb-40">





      {/* Cabeçalho */}
<header className="w-full  mx-auto flex justify-between items-center px-0">
  {/* Logo da empresa */}
  <div className="flex items-center">
    <img
      src="/LogoBrancasemFundo.webp"
      alt="Logo Auto Reach"
      className="h-55 w-auto object-contain"
      loading="eager"
    />
  </div>

  {/* Redes e localização */}
  <div className="text-right text-sm leading-tight">
    <p>📍 Av. João Gualberto, 1342 - Alto da Glória, Curitiba - PR</p>
    <p>
      📷{' '}
      <a
        href="https://instagram.com/ag.autoreach"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-blue-400"
      >
        @ag.autoreach
      </a>
    </p>
  </div>
</header>

      {/* Mensagem centralizada */}
      <main className="text-center flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold mb-4">Obrigado pelo seu cadastro!</h2>
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Em breve entraremos em contato para entender suas <strong>necessidades</strong> e agendar uma reunião estratégica. <br />
          Nosso objetivo é criar uma estratégia de marketing <strong>previsível e escalável</strong> para a sua loja.
        </p>

        {/* Botões centralizados */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/"
            className="bg-white text-[#021d30] px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 font-semibold transition"
          >
            🔙 Voltar ao site
          </Link>
          <a
            href="https://wa.me/5541996855407?text=Olá,%20acabei%20de%20me%20cadastrar%20no%20formulário%20e%20quero%20falar%20agora."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 font-semibold transition"
          >
            💬 Falar no WhatsApp
          </a>
        </div>
      </main>
    </div>
  )
}
