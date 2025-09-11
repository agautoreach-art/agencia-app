
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import LogoAzul from '../../../public/Logoazulsemfundo.png' // nova logo azul
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden  bg-white text-[#002f6b]">
      
      {/* Conteúdo */}
      <div className="container -mt-12 lg:-mt-30 relative mx-auto px-4 pb-16 md:pb-0">
        <article className="grid grid-cols-1 gap-8 lg:grid-cols-1">
          {/* Coluna de conteúdo */}
          <div className="space-y-6 pt-10 md:pt-0 relative z-30 flex flex-col items-center lg:items-center lg:max-w-[700px] lg:mx-auto">
            
            {/* Logo - alinhada à esquerda no desktop */}
            <div className="flex justify-center lg:self-start lg:-ml-24 -mt-7 md:-mb-25 md:-mt-17">
              <Image
                src={LogoAzul}
                alt="Logo Auto Reach Azul"
                width={260}
                height={260}
                priority
                quality={100}
                className="object-contain md:w-[400px] md:h-[400px] lg:w-[230px] lg:h-[450px]"
              />
            </div>

            {/* Título */}
            <h1
              className="text-3xl font-bold leading-relaxed md:text-4xl lg:text-5xl lg:leading-[1.6] mt-10 text-center"
              data-aos="fade-down"
            >
              Tráfego pago com resultado previsível para loja de carros
            </h1>

            {/* Subtítulo */}
            <p
              className=" text-gray-400 lg:text-lg text-center leading-relaxed md:leading-[1.6]"
              data-aos="fade-right"
            >
              Dependa menos dos classificados, fortaleça sua loja e venda mais.
            </p>

            {/* Botão */}
            <div className="flex justify-center">
              <a
                data-aos="fade-up"
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5541996855407?text=Olá, vim atráves do site e tenho interesse nos serviços da Auto Reach."
                className="flex w-fit items-center justify-center gap-2 rounded-md bg-[#002f6b] px-5 py-2 text-white transition hover:bg-[#001f4c]"
              >
                <WhatsappLogoIcon className="h-5 w-5 text-white" />
                Fale com um especialista
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Faixa azul full width, fora do container */}
      <div className="absolute top-[calc(12rem)] -mt-30 sm:-mt-30 left-0 w-screen bg-[#002f6b] text-white text-center font-semibold py-2 z-0">
        Exclusivo para lojas de carro
      </div>

      {/* Badge redonda abaixo da faixa */}
      <div className="absolute top-[calc(12rem+3rem)] left-1/2 -mt-27 sm:-mt-23 transform -translate-x-1/2 bg-[#cdfab9] text-[#002f6b] font-semibold rounded-full px-6 py-1 z-30 text-center badge-transformacao">
        Junte-se à transformação
      </div>
    </section>
  )
}
