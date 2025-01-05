"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o Corre Aqui encontra as melhores promoções?",
    answer:
      "Nosso aplicativo utiliza tecnologia avançada de geolocalização e parcerias com estabelecimentos locais para identificar e mostrar as melhores ofertas em tempo real próximas a você. Atualizamos nossa base de dados constantemente para garantir que você sempre encontre as promoções mais recentes.",
  },
  {
    question: "O aplicativo é gratuito?",
    answer:
      "Sim! O Corre Aqui é totalmente gratuito para os usuários. Você pode baixar o app e começar a economizar imediatamente sem nenhum custo. Nosso objetivo é ajudar você a encontrar as melhores ofertas da sua região.",
  },
  {
    question: "Como faço para me tornar um estabelecimento parceiro?",
    answer:
      "Para se tornar um parceiro, basta clicar em 'Seja um Parceiro' no nosso site ou aplicativo. Nossa equipe entrará em contato em até 24 horas para explicar todos os benefícios e procedimentos. Oferecemos diferentes planos para atender às necessidades do seu negócio.",
  },
  {
    question: "As promoções são atualizadas com que frequência?",
    answer:
      "As promoções são atualizadas em tempo real pelos nossos parceiros. Assim que uma nova oferta é cadastrada ou modificada, ela aparece instantaneamente para os usuários próximos. Você também pode ativar notificações para ser avisado sobre novas promoções.",
  },
  {
    question: "Qual é a área de cobertura do aplicativo?",
    answer:
      "Atualmente, o Corre Aqui está disponível nas principais cidades do Brasil. Estamos constantemente expandindo nossa cobertura para novas regiões. Você pode verificar a disponibilidade na sua cidade baixando o aplicativo.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Tem alguma dúvida? Confira nossas respostas para as perguntas mais
            comuns!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-16 max-w-xl text-center"
        >
          <p className="text-gray-600">
            Ainda tem dúvidas? Entre em contato com nosso suporte
          </p>
          <a
            href="mailto:suporte@correaqui.com.br"
            className="mt-2 inline-block text-primary hover:underline"
          >
            suporte@correaqui.com.br
          </a>
        </motion.div>
      </div>
    </section>
  );
}
