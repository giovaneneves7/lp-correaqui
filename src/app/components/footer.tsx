"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* <Image
                src="/placeholder.svg?text=CA"
                alt="Corre Aqui Logo"
                width={40}
                height={40}
                className="rounded"
              /> */}
              <span className="text-xl font-bold">Corre Aqui</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Sua ferramenta essencial para encontrar as melhores ofertas.
              Economize tempo e dinheiro com o Corre Aqui, seu companheiro de
              compras inteligentes.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:px-8">
            <h3 className="text-lg font-semibold mb-2">Inscreva-se</h3>
            {/* <p className="text-gray-600 mb-4">e ganhe 10% de desconto!</p> */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-sm"
                required
              />
              <Button
                type="submit"
                className="w-full max-w-sm bg-red-500 hover:bg-red-600"
              >
                Inscrever-se
              </Button>
            </form>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="font-semibold mb-4">Menu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recursos"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  {/* <Link
                    href="/precos"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Preços
                  </Link> */}
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informações</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Termos & Condições
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guia"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Guia do Usuário
                  </Link>
                </li>
                <li>
                  <Link
                    href="/suporte"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Central de Suporte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/imprensa"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Informações para Imprensa
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Corre Aqui. Todos os direitos
              reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Voltar ao topo
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
