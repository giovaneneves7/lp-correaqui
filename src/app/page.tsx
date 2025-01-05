import Showcase from "./components/showcase";
import Team from "./components/team";
import Footer from "./components/footer";
import Home from "./components/hero-section";
import { HowItWorks } from "./components/how-it-works";
import { FAQ } from "./components/faq";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
      <HowItWorks />
      <Showcase />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
