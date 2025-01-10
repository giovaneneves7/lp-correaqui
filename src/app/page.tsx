import Team from "./components/team";
import { Footer } from "./components/footer";
import Home from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { FAQ } from "./components/faq";
import { Advantages } from "./components/advantages";
import { TestimonialsSection } from "./components/testimonials-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section id="home">
        <Home />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="faq">
        <FAQ />
      </section>

      <section id="seja-parceiro">
        <Footer />
      </section>
    </div>
  );
}
