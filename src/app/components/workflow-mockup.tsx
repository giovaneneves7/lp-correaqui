"use client";

import { motion } from "framer-motion";
import { Search, Bell, ArrowLeft } from "lucide-react";
import { MapBackground } from "./map-background";
import { MapMarker } from "./map-marker";
import { FaShoppingCart, FaTshirt, FaMobileAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineElectricCar } from "react-icons/md";

interface WorkflowMockupProps {
  step: "search" | "locate" | "compare" | "save";
  delay: number;
}

const categories = [
  {
    icon: <FaShoppingCart />,
    name: "Mercado",
    description: "Todas as promoções relacionadas ao mercado.",
  },
  {
    icon: <MdOutlineElectricCar />,
    name: "Eletrônicos",
    description: "Promoções em gadgets e eletrônicos.",
  },
  {
    icon: <FaTshirt />,
    name: "Roupas",
    description: "Descontos em vestuário e acessórios.",
  },
  {
    icon: <FaMobileAlt />,
    name: "Celulares",
    description: "Ofertas em smartphones e acessórios.",
  },
];
export function WorkflowMockup({ step, delay }: WorkflowMockupProps) {
  const stores = [
    { name: "Carrefour", discount: "25%", x: "30%", y: "20%" },
    { name: "Magazine Luiza", discount: "40%", x: "70%", y: "35%" },
    { name: "Casas Bahia", discount: "30%", x: "45%", y: "60%" },
    { name: "Americanas", discount: "20%", x: "20%", y: "75%" },
    // { name: "Extra", x: "80%", y: "70%" },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="relative mx-auto w-[220px]"
    >
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-black bg-white">
        <div className="relative h-[450px] w-[208px]">
          {/* Status Bar */}
          <div className="flex h-10 items-center justify-between bg-white px-4">
            <span className="text-xs">9:41</span>
            <div className="flex items-center space-x-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
          </div>

          {step === "search" && (
            <>
              <div className="flex items-center justify-between bg-white px-4 py-2">
                <div className="flex-1">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3 }}
                  >
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: delay + 0.5, duration: 1 }}
                      className="h-9 rounded-full bg-gray-100"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: delay + 1.5 }}
                      className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                    >
                      Buscar promoções...
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay + 2 }}
                  className="rounded-lg p-3"
                >
                  <h3 className="mb-2  text-sm font-medium">
                    Categorias Populares
                  </h3>
                  {/* Categorias */}
                  <div className="flex flex-col gap-3">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="flex gap-2 justify-between rounded-md p-4 text-xs text-left bg-slate-100"
                      >
                        <div className="flex gap-2">
                          {category.icon}
                          {category.name}
                        </div>
                        <div className="">
                          <IoIosArrowForward />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </>
          )}

          {step === "locate" && (
            <>
              <div className="flex items-center justify-between bg-white px-4 py-2">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Ofertas Próximas</span>
                <Bell className="h-5 w-5" />
              </div>
              <div className="relative h-[calc(100%-48px)] w-full bg-gray-50">
                <MapBackground />
                {stores.map((store, index) => (
                  <motion.div
                    key={store.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + index * 0.2 }}
                  >
                    <MapMarker
                      variant={store.discount ? "highlighted" : "store"}
                      label={store.name}
                      discount={store.discount}
                      className={`left-[${store.x}] top-[${store.y}]`}
                      style={{
                        left: store.x, // Valor vindo da variável
                        top: store.y, // Valor vindo da variável
                        position: "absolute", // Garantindo posicionamento absoluto
                        transform: "translate(-50%, -50%)", // Centraliza no ponto exato
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {step === "compare" && (
            <div className="p-4">
              <h3 className="mb-4 text-sm font-medium">Comparar Preços</h3>
              {stores.slice(0, 3).map((store, index) => (
                <motion.div
                  key={store.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay + index * 0.2 }}
                  className="mb-3 rounded-lg border p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{store.name}</span>
                    {store.discount && (
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                        {store.discount} OFF
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {"< 1km de distância"}
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-green-600">
                      R${" "}
                      {(
                        99.99 *
                        (1 - parseInt(store.discount || "0") / 100)
                      ).toFixed(2)}
                    </span>
                    {store.discount && (
                      <span className="text-xs text-gray-500 line-through">
                        R$ 99.99
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {step === "save" && (
            <div className="p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                className="rounded-lg bg-green-50 p-4 text-center"
              >
                <div className="mb-2 text-2xl font-bold text-green-600">
                  R$ 59,99
                </div>
                <div className="text-sm text-green-700">
                  Você economizou R$ 40,00!
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: delay + 0.5 }}
                  className="mt-4 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white"
                >
                  Aproveitar Oferta
                </motion.div>
              </motion.div>
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-medium">
                  Histórico de Economia
                </h3>
                {[
                  { date: "Hoje", value: 40 },
                  { date: "Última semana", value: 156 },
                  { date: "Este mês", value: 487 },
                ].map((item, index) => (
                  <motion.div
                    key={item.date}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.8 + index * 0.2 }}
                    className="mb-2 flex items-center justify-between rounded-lg bg-gray-50 p-3"
                  >
                    <span className="text-sm text-gray-600">{item.date}</span>
                    <span className="font-medium text-green-600">
                      R$ {item.value.toFixed(2)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
