import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { ContactForm } from "./_components/sign-up-hook-form";

export default function Home() {
  return(
    <main>
      <Hero/>
      <ContactForm/>
      <Services/>
      <About/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}