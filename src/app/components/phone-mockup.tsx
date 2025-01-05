"use client";

import { motion } from "framer-motion";
import { Search, Bell, ArrowLeft } from "lucide-react";
import { MapBackground } from "./map-background";
import { MapMarker } from "./map-marker";

const stores = [
  { name: "Carrefour", discount: "25%", x: "20%", y: "30%" },
  { name: "Magazine Luiza", discount: "30%", x: "80%", y: "40%" },
  { name: "Casas Bahia", discount: "10%", x: "60%", y: "15%" },
  { name: "Americanas", discount: "20%", x: "30%", y: "5%" },
];

export function PhoneMockup() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-[280px]"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-black bg-white">
        <div className="relative h-[572px] w-[264px]">
          {/* Status Bar */}
          <div className="flex h-12 items-center justify-between bg-white px-4">
            <span className="text-sm">9:41</span>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="h-2 w-2 rounded-full bg-black" />
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between bg-white px-4 py-2">
            <ArrowLeft className="h-6 w-6" />
            <div className="flex-1 px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar promoções..."
                  className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm"
                />
              </div>
            </div>
            <Bell className="h-6 w-6" />
          </div>

          {/* Map Interface */}
          <div className="relative h-[calc(100%-96px)] w-full bg-gray-50">
            <MapBackground />

            {/* Store Markers */}
            {stores.map((store) => (
              <MapMarker
                key={store.name}
                variant={store.discount ? "highlighted" : "store"}
                label={store.name}
                discount={store.discount}
                style={{
                  left: store.x, // Valor vindo da variável
                  top: store.y, // Valor vindo da variável
                  position: "absolute", // Garantindo posicionamento absoluto
                  transform: "translate(-50%, -50%)", // Centraliza no ponto exato
                }}
              />
            ))}

            {/* Current Location Marker */}
            <motion.div
              className="absolute left-1/2 top-1/3 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-25" />
              <div className="relative h-full w-full rounded-full bg-blue-500" />
            </motion.div>

            {/* Bottom Sheet Preview */}
            <div className="absolute bottom-0 w-full rounded-t-3xl bg-white p-4 shadow-lg">
              <div className="mb-2 h-1 w-12 rounded-full bg-gray-200 mx-auto" />
              <h3 className="mb-2 text-lg font-semibold">Promoções próximas</h3>
              <div className="space-y-3">
                {stores.slice(0, 2).map((store) => (
                  <motion.div
                    key={store.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                  >
                    <div>
                      <p className="font-medium">{store.name}</p>
                      <p className="text-sm text-gray-500">
                        {"< 1km de distância"}
                      </p>
                    </div>
                    {store.discount && (
                      <span className="rounded-full bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                        {store.discount} OFF
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
