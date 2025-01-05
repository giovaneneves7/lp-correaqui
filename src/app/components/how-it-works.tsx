"use client";

import { motion } from "framer-motion";

import { ConnectingLine } from "./connecting-line";
import { WorkflowStep } from "./workflow-step";

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Encontrar promoções perto de você nunca foi tão fácil! Siga estes
              passos simples e comece a economizar agora mesmo.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <ConnectingLine />

          <div className="grid gap-8 md:grid-cols-4">
            <WorkflowStep
              title="Busque"
              description="Digite o produto ou serviço que você está procurando"
              step="search"
              delay={0}
            />
            <WorkflowStep
              title="Localize"
              description="Veja todas as promoções disponíveis próximas a você"
              step="locate"
              delay={0.2}
            />
            <WorkflowStep
              title="Compare"
              description="Compare preços e escolha a melhor oferta"
              step="compare"
              delay={0.4}
            />
            <WorkflowStep
              title="Economize"
              description="Aproveite os descontos e economize nas suas compras"
              step="save"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
