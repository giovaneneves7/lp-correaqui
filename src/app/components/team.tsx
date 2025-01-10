/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const teamMembers = [
  {
    name: "Giovane Neves",
    role: "Founder",
    image: "/members/Giovane.jpg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/giovane-neves-555845219/",
  },
  {
    name: "Elia Maria",
    role: "Marketing",
    image: "/members/elia.jpg?height=100&width=100",
    linkedin: "https://www.instagram.com/elia.maria_br",
  },
  {
    name: "Caio Alves",
    role: "Founder",
    image: "/members/caio.jpeg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/caio-alves-18780623b/",
  },
  {
    name: "Icara Rocha",
    role: "Marketing",
    image: "/members/icar.jpg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/icara-rocha-880860277/",
  },
  {
    name: "Andesson Reis",
    role: "Founder",
    image: "/members/andy.jpeg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/andesson-reis/",
  },
  {
    name: "Ueslei",
    role: "Founder",
    image: "/members/ueslei.jpeg?height=100&width=100",
    linkedin:
      "https://www.linkedin.com/in/ueslei-souza-brand%C3%A3o-aa4b091b3/",
  },
  {
    name: "Mateus",
    role: "Founder",
    image: "/placeholder.svg?height=100&width=100",
    linkedin: "#",
  },

  {
    name: "Fabricio Costa",
    role: "Founder",
    image: "/members/fabricio.jpg?height=100&width=100",
    linkedin: "https://www.instagram.com/fabricio_costta01/",
  },
  {
    name: "Eduardo Souza",
    role: "Freelancer",
    image: "/members/eduardo.jpeg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/eduardo-souza-dev/",
  },
  {
    name: "Hercules Carvalho",
    role: "Marketing",
    image: "/members/hercules.jpeg?height=100&width=100",
    linkedin: "https://www.linkedin.com/in/herculescarvalhoandrade/",
  },
];

const founders = teamMembers.filter((member) => member.role === "Founder");

export default function Team() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Nosso <span className="text-bgSecondary">Time</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reunimos uma das melhores equipes para apoiar e melhorar nosso
            produto. Sempre ouvimos nossos clientes e buscamos tornar o produto
            o melhor possível e agradável para o seu uso.
          </p>
        </motion.div>

        <Tabs defaultValue="team" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-12">
            <TabsTrigger value="team" className="text-lg">
              Team members
            </TabsTrigger>
            <TabsTrigger value="founders" className="text-lg">
              Founders
            </TabsTrigger>
          </TabsList>
          <TabsContent value="team">
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 text-center relative group"
                >
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  <motion.a
                    href={member.linkedin}
                    className="absolute bottom-0 right-0 bg-bgSecondary p-2 rounded-tl-lg rounded-br-lg text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="founders">
            <div className="grid md:grid-cols-4 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 text-center relative group"
                >
                  <div className="mb-4">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{founder.name}</h3>
                  <p className="text-gray-500 text-sm">{founder.role}</p>
                  <motion.a
                    href={founder.linkedin}
                    className="absolute bottom-0 right-0 bg-bgSecondary p-2 rounded-tl-lg rounded-br-lg text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
