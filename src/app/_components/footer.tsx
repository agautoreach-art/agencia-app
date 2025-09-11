import { FacebookLogoIcon, InstagramLogoIcon, TiktokLogoIcon } from '@phosphor-icons/react/dist/ssr'
import logoazul from '../../../public/Logoazulsemfundo.webp'
import amorim from '../../../public/AmorimMotors.png'
import viasul from '../../../public/ViaSul.png'
import instagram from '../../../public/Instagram.png'
import facebook from '../../../public/Facebook.png'
import meta from '../../../public/Meta.png'
import google from '../../../public/Google.png'
import tiktok from '../../../public/Tiktok.png'
import Image from 'next/image'

const brands = [ 
    { name: "Meta ", logo: meta },
    { name: "Google", logo: google },
    { name: "Instagram", logo: instagram },
    { name: "Facebook", logo: facebook },
    { name: "Tiktok", logo: tiktok },
]

export function Footer() {
    return (
        <section className="bg-[white] text-white">
            <div className="container mx-auto px-4 py-16">

                {/* Lojas que trabalhamos */}
                <div className=" text-[#002f6b] border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-bold mb-8 text-center">Principais plataformas que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-[white] p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Faixa verde (totalmente fora do container) */}
            <div className="w-full ">
    <div className="bg-gradient-to-b from-[#51ff00] to-white text-center py-10 flex flex-col items-center gap-6">
        <h2 className="text-xl md:text-2xl font-medium text-blue-950">
            Vamos estruturar juntos sua máquina de vendas online?
        </h2>

        <a
            href="https://wa.me/5541996855407?text=Olá, vim através do site e gostaria de agendar uma reunião."
            target="_blank"
            className="text-[#002f6b] border-[1px] border-[#002f6b] px-6 py-3 rounded-md text-sm font-medium flex items-center gap-4 hover:bg-[#002f6b] hover:text-white transition"
        >
            <span>Agende uma reunião</span>

            {/* Seta apontando para a direita */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path fill="#002f6b" d="M7 4l5 5-5 5" />
            </svg>
        </a>
    </div>

    {/* Linha pontilhada abaixo */}
    <div className="w-full border-t-[1px] border-dotted border-[#002f6b] mt-6"></div>
</div>

            {/* Conteúdo principal do footer */}
            <div className="container mx-auto px-4 py-16">
                <footer className="text-[#002f6b] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Auto Reach Assessoria Digital</h3>
                        <p className="mb-4 text-black">Assessoria Digital especializada em lojas de veículos.</p>
                        <a 
                            target="_blank"
                            href={`https://wa.me/5541996855407?text=Olá, vim atráves do site e tenho interesse nos serviços da Auto Reach.`}
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p className="text-black">Email: contato@autoreach.com</p>
                        <p className="text-black">Telefone: (41)99685-5407</p>
                        <p className="text-black">
                            Av. João Gualberto, 1342 - Sala 505 Andar 05 - Alto da Glória Curitiba - PR, 80030-000
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61579705187948#" target="_blank">
                                <FacebookLogoIcon className="w-8 h-8" />
                            </a>
                            <a href="https://www.instagram.com/ag.autoreach/" target="_blank">
                                <InstagramLogoIcon className="w-8 h-8" />
                            </a>
                            <a href="https://www.instagram.com/ag.autoreach/" target="_blank">
                                <TiktokLogoIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}
