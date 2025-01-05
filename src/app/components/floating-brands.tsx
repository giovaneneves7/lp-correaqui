/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "Carrefour",
    x: "20%",
    y: "20%",
    delay: 0,
    src: "/brands/Carrefour.png",
  },
  {
    name: "Extra",
    x: "80%",
    y: "25%",
    delay: 0.2,
    src: "/brands/Extra.jpg",
  },
  {
    name: "Americanas",
    x: "15%",
    y: "60%",
    delay: 0.4,
    src: "/brands/Americanas.jpeg",
  },
  {
    name: "Magazine Luiza",
    x: "75%",
    y: "65%",
    delay: 0.6,
    src: "/brands/Magazine Luiza.png",
  },
  {
    name: "Casas Bahia",
    x: "30%",
    y: "30%",
    delay: 0.8,
    src: "/brands/CasasBahia.jpg",
  },
  {
    name: "Renner",
    x: "60%",
    y: "15%",
    delay: 1,
    src: "/brands/Renner.png",
  },
];

export function FloatingBrands() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {brands.map((brand) => (
        <motion.div
          key={brand.name}
          className="absolute"
          style={{ left: brand.x, top: brand.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: brand.delay,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <img
              src={brand.src}
              alt={brand.name}
              width={40}
              height={40}
              className=" rounded-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
