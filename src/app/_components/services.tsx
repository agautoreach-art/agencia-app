"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, LucideCircleDollarSign ,Smartphone,Clapperboard,ClipboardList } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {  
        title: "Gestão de Tráfego Pago",
        description: "Impulsionamos seus resultados com campanhas de anúncios estratégicas e eficientes. Gerenciamos seus anúncios em plataformas como Facebook Ads, Instagram Ads, Google Ads e outras, com foco em gerar leads qualificados, aumentar vendas e fortalecer sua presença digital.",
        price: "R$50",
        icon: <LucideCircleDollarSign />,
        linkText: "Olá vi no site"
   },
    {  
        title: "Social Media",
        description: "Fortaleça sua presença online com estratégias completas de gestão de redes sociais. Criamos, planejamos e publicamos conteúdos que engajam seu público, aumentam seguidores qualificados e posicionam sua marca de forma consistente.",
        price: "R$50",
        icon: <Smartphone />,
        linkText: "Olá vi no site"
   },
   {  
        title: "Vídeo Maker",
        description: "Dê vida à sua marca com vídeos profissionais que encantam e engajam seu público. Produzimos conteúdos audiovisuais, anúncios e apresentações, desde a criação do roteiro até a edição final. Autoridade e resultados reais para a sua loja.",
        price: "R$50",
        icon: <Clapperboard />,
        linkText: "Olá vi no site"
   },
   {  
        title: "Relatórios e Estratégias",
        description: "Acompanhamos o desempenho das suas campanhas com relatórios diários e semanais, garantindo total transparência sobre os resultados. Além disso, realizamos reuniões mensais para analisar métricas, revisar estratégias e planejar ações futuras, otimizando continuamente seus investimentos e maximizando o retorno.",
        price: "R$50",
        icon: <ClipboardList />,
        linkText: "Olá vi no site"
   },
]

export function Services() {

 const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints:{
        "(win-width: 768px)": { slidesToScroll: 3 }
    }
})

function scrollPrev(){
 emblaApi?.scrollPrev();
}

function scrollNext(){
 emblaApi?.scrollNext();
}

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

            <h2 className="text-4xl text-[#1d396f] font-bold mb-12">Serviços</h2>
 
        <div className="relative">

           <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
                {services.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">               
                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                   <div className='flex-1 flex items-start justify-between'>

                    <div className='flex gap-3'>
                  <span className='text-3xl'>{item.icon}</span>
                  <div>
                      <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                      <p className='text-gray-400 text-sm select-none'>
                        {item.description}
                      </p>
                  </div>
                  </div>

                   </div>

                   <div className='border-t border-gray-400 pt-4 flex items-center justify-center'>
                    <a 
                      target='_blank'
                      href={`https://wa.me/5541996855407?text=Olá, vim atráves do site e gostaria de mais informações sobre ${item.title}`}
                      className="flex items-center justify-center gap-2 hover:bg-blue-950 px-4 py-1 rounded-md duration-300"
                    >
                        <WhatsappLogo className='w-4 h-5'/>
                        Entrar em Contato
                    </a>
                   </div>

                 </article>
               </div>
              ))}           
            </div>
          </div>

          <button
           className='flex items-center justify-center rounded-full shadow-lg  bg-white w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
           onClick={scrollPrev}
          >
          <ChevronLeft className='w-6 h-6 text-gray-600' />

          </button>

          <button
           className='flex items-center justify-center rounded-full shadow-lg  bg-white w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
           onClick={scrollNext}
          >
          <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
    )
}
