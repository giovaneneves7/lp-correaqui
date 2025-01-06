/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Search, Bell, ArrowLeft } from "lucide-react";
import { MapBackground } from "./map-background";
import { MapMarker } from "./map-marker";

import { FaShoppingCart, FaTshirt, FaMobileAlt } from "react-icons/fa";
import { MdOutlineElectricCar } from "react-icons/md";

interface WorkflowMockupProps {
  step: "search" | "locate" | "compare" | "save";
  delay: number;
}

export function WorkflowMockup({ step, delay }: WorkflowMockupProps) {
  const stores = [
    {
      name: "Carrefour",
      discount: "25%",
      x: "30%",
      y: "20%",
      logo: "/brands/Carrefour.png",
      validUntil: "31 Jan 2024",
    },
    {
      name: "Magazine Luiza",
      discount: "40%",
      x: "70%",
      y: "35%",
      logo: "/brands/Magazine Luiza.png",
      validUntil: "28 Jan 2024",
    },
    {
      name: "Casas Bahia",
      discount: "30%",
      x: "45%",
      y: "60%",
      logo: "/brands/CasasBahia.jpg",
      validUntil: "25 Jan 2025",
    },
  ];

  const categories = [
    { icon: <FaShoppingCart />, name: "Mercado" },
    { icon: <MdOutlineElectricCar />, name: "Eletrônicos" },
    { icon: <FaTshirt />, name: "Roupas" },
    { icon: <FaMobileAlt />, name: "Celulares" },
  ];

  const monthlyData = [
    { month: "Jun", value: 30 },
    { month: "Jul", value: 45 },
    { month: "Ago", value: 80 },
    { month: "Set", value: 60 },
    { month: "Out", value: 90 },
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
              <div className="p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay + 2 }}
                >
                  <h3 className="mb-2 text-sm font-medium">
                    Categorias Populares
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center gap-2 rounded-lg bg-gray-50 p-3"
                      >
                        <span className="text-gray-600">{category.icon}</span>
                        <span className="text-xs">{category.name}</span>
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
                      style={{
                        left: store.x,
                        top: store.y,
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {step === "compare" && (
            <div className="h-full bg-white p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Minhas Ofertas</h3>
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {stores.map((store, index) => (
                  <motion.div
                    key={store.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <img
                      src={store.logo}
                      alt={store.name}
                      width={30}
                      height={30}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{store.name}</h4>
                          <p className="text-xs text-gray-500">
                            Válido até {store.validUntil}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="ml-3 text-xs font-medium text-red-600">
                            {store.discount} OFF
                          </span>
                          {/* <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {step === "save" && (
            <div className="h-full bg-white p-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600">Sua Economia</p>
                  <p className="text-2xl font-bold">R$ 487,00</p>
                </div>
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="/members/eduardo.jpeg"
                    alt="Profile"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              <div className="relative h-32 mb-6">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 100"
                  preserveAspectRatio="none"
                >
                  {/* Line graph */}
                  <motion.path
                    d={`M 20,${100 - monthlyData[0].value} 
                        L ${20 + 40},${100 - monthlyData[1].value} 
                        L ${20 + 80},${100 - monthlyData[2].value}
                        L ${20 + 120},${100 - monthlyData[3].value}
                        L ${20 + 160},${100 - monthlyData[4].value}`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay }}
                  />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  {monthlyData.map((data) => (
                    <span key={data.month}>{data.month}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-4">Últimas Economias</h3>
                <div className="space-y-4">
                  {stores.map((store, index) => (
                    <motion.div
                      key={store.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: delay + 0.5 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={store.logo}
                          alt={store.name}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-xs mr-4">
                            {store.name}
                          </p>
                          <p className="text-xs text-gray-500">Hoje, 09:39</p>
                        </div>
                      </div>
                      <span className="text-red-600 text-xs font-medium">
                        R$25,00
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
