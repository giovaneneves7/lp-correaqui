/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm mb-4">
            New
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A melhor forma de achar{" "}
            <span className="text-bgMain">Promoções</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Vai sair para fazer compras? Que tal ter um mapa que mostre onde
            estão as melhores promoções da sua cidade?
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Read More
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/t-iphone2.png"
            alt="App Interface"
            className="w-full max-w-[250px] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
