"use client"
import { LucideCircleDollarSign, Smartphone, Clapperboard, ClipboardList } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [
    {  
        title: "Gestão de Tráfego Pago",
        description: "Impulsionamos seus resultados com campanhas de anúncios estratégicas e eficientes. Gerenciamos seus anúncios em plataformas como Facebook Ads, Instagram Ads, Google Ads e outras, com foco em gerar leads qualificados, aumentar vendas e fortalecer sua presença digital.",
        icon: <LucideCircleDollarSign />,
    },
    {  
        title: "Social Media",
        description: "Fortaleça sua presença online com estratégias completas de gestão de redes sociais. Criamos, planejamos e publicamos conteúdos que engajam seu público, aumentam seguidores qualificados e posicionam sua marca de forma consistente.",
        icon: <Smartphone />,
    },
    {  
        title: "Vídeo Maker",
        description: "Dê vida à sua marca com vídeos profissionais que encantam e engajam seu público. Produzimos conteúdos audiovisuais, anúncios e apresentações, desde a criação do roteiro até a edição final. Autoridade e resultados reais para a sua loja.",
        icon: <Clapperboard />,
    },
    {  
        title: "Relatórios e Estratégias",
        description: "Acompanhamos o desempenho das suas campanhas com relatórios diários e semanais, garantindo total transparência sobre os resultados. Além disso, realizamos reuniões mensais para analisar métricas, revisar estratégias e planejar ações futuras, otimizando continuamente seus investimentos e maximizando o retorno.",
        icon: <ClipboardList />,
    },
]

export function Services() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                {/* TOPO DA SEÇÃO */}
                <div className="text-center mb-12">
                    <span className="inline-block border border-[#1d396f] text-[#1d396f] px-8 py-2 rounded-full text-sm md:text-base font-semibold tracking-widest mb-6">
                        SERVIÇOS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1d396f] leading-snug">
                        Criamos a estrutura completa <br />
                        para seu <span className="text-blue-600">negócio vender mais!</span>
                    </h2>
                </div>
                {/* FIM DO TOPO */}

                {/* Lista de serviços vertical */}
                <div className="flex flex-col gap-3">
                    {services.map((item, index) => (
                        <article key={index} className="bg-gradient-to-r from-[#1e293b] to-[#003366] text-white rounded-2xl p-6 space-y-4 flex">
                            <div className="flex gap-3 items-start">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm select-none">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Botão WhatsApp */}
                <div className="flex justify-center mt-8">
                    <a
                        data-aos="fade-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/5541996855407?text=Olá, vim atráves do site e tenho interesse nos serviços da Auto Reach."
                        className="flex w-fit items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#1e293b] to-[#003366] px-5 py-2 text-white transition hover:bg-[#001f4c]"
                    >
                        <WhatsappLogoIcon className="h-5 w-5 text-white" />
                        Fale com um especialista
                    </a>
                </div>
            </div>
        </section>
    )
}
