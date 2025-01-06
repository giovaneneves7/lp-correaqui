"use client";

import { motion } from "framer-motion";
import { Smartphone, Percent, MapPin, Bell } from "lucide-react";

const advantages = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Interface Intuitiva",
    description:
      "Navegue facilmente e encontre as melhores ofertas com poucos toques.",
  },
  {
    icon: <Percent className="h-8 w-8" />,
    title: "Promoções Exclusivas",
    description:
      "Acesse descontos e ofertas disponíveis apenas para usuários do Corre Aqui.",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Localização Inteligente",
    description:
      "Encontre as melhores ofertas próximas a você, economizando tempo e dinheiro.",
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Notificações Personalizadas",
    description:
      "Receba alertas sobre promoções de produtos que você realmente deseja.",
  },
];

export function Advantages() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Por que escolher o Corre Aqui?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como nosso app revoluciona sua experiência de compras e
            economias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AdvantageCard {...advantage} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="#download"
            className="inline-block bg-bgSecondary text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Baixe Agora e Comece a Economizar
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AdvantageCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-4 text-bgSecondary"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
