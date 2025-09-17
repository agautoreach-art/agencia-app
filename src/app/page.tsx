import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { CicloDeVendas } from "./_components/ciclodevendas";

export default function Home() {
  return(
    <main>
      <Hero />
      <Services />
      <About />
      <CicloDeVendas />
      <Testimonials />
      <Footer />
    </main>
  )
}