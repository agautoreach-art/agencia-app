"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Icon, icons, Clock, } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import lojadesfocada from '../../../public/LojaDesfocada.webp'
import cesar from '../../../public/Cesar Amorim.jpg'
import matheus from '../../../public/Matheus.jpg'
import andre from '../../../public/André Avilla.jpg'
import carlos from '../../../public/Carlos.jpg'
import Image from 'next/image'


const testimonials =[
    
    { 
        content: " O trabalho de vocês fez toda a diferença aqui na loja. As visitas aumentaram e os leads estão muito mais qualificados. Obrigada pelo suporte de sempre! ",
    author: " Camila ",
    role: "Proprietária Rota 21 Multimarcas ",
    image: andre,
},
{ 
        content: " Em pouco tempo já conseguimos ver retorno. O tráfego pago tem sido um divisor de águas nas nossas vendas. Excelente parceria! ",
    author: " Matheus ",
    role: " Proprietário Via Sul veículos ",
    image: matheus,
},
{ 
        content: " Desde que começamos com vocês, nossa loja aumentou as vendas significativamente ",
    author: " Carlos ",
    role: " Gerente Top Car veículos  ",
    image: cesar,
},
{ 
        content: " As campanhas estão cada vez mais certeiras. A loja ganhou visibilidade e isso refletiu direto nas vendas. ",
    author: " André ",
    role: " Proprietário Amorim Motors novos e seminovos ",
    image: carlos,
},

]

export function Testimonials() {

 const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,    
})


function scrollPrev(){
 emblaApi?.scrollPrev();
}

function scrollNext(){
 emblaApi?.scrollNext();
}


    return (
        <section className="bg-gradient-to-r from-[#1e293b] to-[#003366] py-16">
            <div className="container mx-auto px-4">

            <h2 className="text-4xl text-white text-center font-bold mb-5">Mais de 100 cases de sucesso registrados</h2>
          <p className="text-1xl text-gray-300 text-center mb-12">Projetos com resultados acima da média são transformados <br /> em cases de sucesso. Conheça alguns deles abaixo.
          </p>
 
        <div className="relative max-w-4xl mx-auto">

           <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
                {testimonials.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-3">               
                <article className="bg-white text-[#1e293b] rounded-2xl p-6 space-y-4 h-full flex flex-col">
                   <div className="flex flex-col items-center text-center space-y-4">
                    <div className='relative w-24 h-24'>
                        <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        sizes='96px'
                        className='object-cover rounded-full'
                        />

                    </div>

                    <p className=' text-gray-700'>{item.content}</p>

                    <div>
                                           <p className='font-bold'>{item.author}</p>

                   <p className='text-sm text-gray-400'>{item.role}</p>
                    </div>

                   
                    


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

