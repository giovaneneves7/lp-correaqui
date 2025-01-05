import { FloatingBrands } from "./floating-brands";
import { Navbar } from "./navbar";
import { PhoneMockup } from "./phone-mockup";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <Navbar />

      <main className="relative pt-16">
        {/* Hero Section */}
        <div className="container relative mx-auto px-4 py-20">
          <div className="relative z-10 text-center">
            <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl">
              Encontre todas as promoções perto de você
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Economize tempo e dinheiro encontrando as melhores ofertas na sua
              região. Baixe agora e não perca nenhuma promoção!
            </p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100/50" />
          </div>

          {/* Phone and Floating Brands */}
          <div className="relative mt-16 h-[600px]">
            <FloatingBrands />
            <PhoneMockup />
          </div>

          {/* QR Code */}
          <div className="absolute bottom-8 right-8 hidden rounded-lg bg-white p-4 shadow-lg md:block">
            <div className="h-24 w-24 bg-gray-200" />
            <p className="mt-2 text-center text-sm text-gray-600">
              Escaneie para baixar
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
