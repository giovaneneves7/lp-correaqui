"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ana Maria",
    role: "Dona de casa",
    image: "/placeholder.svg?text=AM",
    quote:
      "Esse Corre Aqui é bom demais! Antes eu perdia horas pesquisando promoções, agora faço tudo rapidinho.",
  },
  {
    name: "Olivia Souza",
    role: "Vendedora",
    image: "/placeholder.svg?text=OS",
    quote:
      "Depois que comecei a usar o Corre Aqui, minha vida mudou. É fácil de usar e as ofertas aparecem na hora certa!",
  },
  {
    name: "Seu Jorge",
    role: "Motorista de aplicativo",
    image: "/placeholder.svg?text=SJ",
    quote:
      "Pra quem vive na correria como eu, o Corre Aqui é uma mão na roda. Economizo sem nem perceber.",
  },
  {
    name: "Dona Lourdes",
    role: "Aposentada",
    image: "/placeholder.svg?text=DL",
    quote:
      "Adoro como o app me ajuda a economizar. Já tô indicando pras amigas, porque realmente vale a pena!",
  },
  {
    name: "Lucas Silva",
    role: "Estudante",
    image: "/placeholder.svg?text=LS",
    quote:
      "Cara, o Corre Aqui salvou meu bolso! Consigo achar promoção pra tudo que preciso sem gastar tempo.",
  },
  {
    name: "Mariana Alves",
    role: "Autônoma",
    image: "/placeholder.svg?text=MA",
    quote:
      "O app é muito bom mesmo, tudo que eu preciso aparece rapidinho. Já economizei um monte!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#F8F9FF] py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-bgSecondary">Veja o que nossos clientes</span>{" "}
            dizem sobre economizar com o Corre Aqui
          </h2>
          <p className="text-gray-600 text-lg">
            Diga adeus às buscas intermináveis por ofertas. Experimente um
            processo mais suave e rápido que permite que você se concentre no
            que realmente importa: economizar seu dinheiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          {/* <Button variant="outline" size="lg" className="rounded-full px-8">
            Ver todos
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
