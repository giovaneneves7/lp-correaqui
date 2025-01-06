/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

export default function Showcase() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem do App */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/corre-aqui-app.png"
            alt="Corre Aqui App Interface"
            className="w-full max-w-[300px] mx-auto transform -rotate-12"
          />
        </motion.div>
        {/* Descrição do App */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Encontre as melhores promoções perto de você!
          </h2>
          <p className="text-gray-600 mb-8">
            O Corre Aqui conecta você às melhores promoções da sua região,
            utilizando tecnologia avançada de geolocalização para garantir
            economia na palma da sua mão. É gratuito e fácil de usar!
          </p>
          {/* Botões de Download */}
          <div className="flex space-x-4">
            <Button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Link href="https://apps.apple.com">
                <Button variant="ghost" size="icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.53-3.2 0-1.44.71-2.2.5-3.08-.4C3.33 16.08 4.74 8.91 9.37 8.71c1.13.07 1.95.63 2.86.67 1.31-.18 2.06-.72 3.12-.67.82.03 3.17.32 4.67 2.45-4.12 2.44-3.45 8.82.03 9.12ZM15.5 6.04c-2.18-.21-4.02 1.53-3.75 3.46 2.03.15 4-1.51 3.75-3.46Z" />
                  </svg>
                </Button>
              </Link>

              <div className="text-left">
                <div className="text-xs">Disponível na</div>
                <div className="font-semibold">APP STORE</div>
              </div>
            </Button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Link href="https://play.google.com">
                <Button variant="ghost" size="icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.891 12l1.807-2.379zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                  </svg>
                </Button>
              </Link>
              <div className="text-left">
                <div className="text-xs">Disponível no</div>
                <div className="font-semibold">GOOGLE PLAY</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
