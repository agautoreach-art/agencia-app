"use client"
import { LucideCircleDollarSign, Smartphone, Clapperboard, ClipboardList } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [
    {  
        title: "Gestão de Tráfego Pago",
        description: "Impulsionamos seus resultados com campanhas de anúncios estratégicas e eficientes. Gerenciamos seus anúncios em plataformas como Facebook Ads, Instagram Ads, Google Ads e outras, com foco em gerar leads qualificados, aumentar vendas e fortalecer sua presença digital.",
        icon: <LucideCircleDollarSign className="h-8 w-8 text-white" />,
    },
    {  
        title: "Gestão de Mídias",
        description: "Fortaleça sua presença online com estratégias completas de gestão de redes sociais. Criamos, planejamos e publicamos conteúdos que engajam seu público, aumentam seguidores qualificados e posicionam sua marca de forma consistente.",
        icon: <Smartphone className="h-8 w-8 text-white" />,
    },
    {  
        title: "Vídeo Maker",
        description: "Dê vida à sua marca com vídeos profissionais que encantam e engajam seu público. Produzimos conteúdos audiovisuais, anúncios e apresentações, desde a criação do roteiro até a edição final. Autoridade e resultados reais para a sua loja.",
        icon: <Clapperboard className="h-8 w-8 text-white" />,
    },
    {  
        title: "Relatórios e Estratégias",
        description: "Acompanhamos o desempenho das suas campanhas com relatórios diários e semanais, garantindo total transparência sobre os resultados. Além disso, realizamos reuniões mensais para analisar métricas, revisar estratégias e planejar ações futuras, otimizando continuamente seus investimentos e maximizando o retorno.",
        icon: <ClipboardList className="h-8 w-8 text-white" />,
    },
]

export function Services() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">

                {/* TOPO DA SEÇÃO */}
                <div className="text-center mb-12">
                    <span className="inline-block border border-[#1d396f] text-[#1d396f] px-8 py-2 rounded-full text-sm md:text-base font-semibold tracking-widest mb-6">
                        SERVIÇOS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1d396f] leading-snug">
                        Criamos a estrutura completa <br />
                        para sua loja <span className="text-green-500"> vender mais!</span>
                    </h2>
                </div>
                {/* FIM DO TOPO */}

                {/* Lista de serviços com grid responsivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {services.map((item, index) => (
                        <article key={index} className="bg-white text-[#1d396f] rounded-2xl p-6 space-y-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                            <div className="flex gap-3 items-start">
                                <div className="p-4 bg-[#002f6b] rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botão WhatsApp */}
                <div className="flex justify-center mt-8">
                    
                </div>
            </div>
        </section>
    )
}
