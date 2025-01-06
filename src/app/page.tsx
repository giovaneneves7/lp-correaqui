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
      <Home />
      <HowItWorks />
      <Advantages />
      <TestimonialsSection />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
