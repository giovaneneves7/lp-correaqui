import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  PRODUTOS: [
    { name: "App Mobile", href: "#" },
    { name: "Para Empresas", href: "#" },
    { name: "Integrações", href: "#" },
    { name: "API", href: "#" },
  ],
  DADOS: [
    { name: "Estatísticas", href: "#" },
    { name: "Relatórios", href: "#" },
    { name: "Análises", href: "#" },
  ],
  APRENDA: [
    { name: "Como Funciona", href: "#" },
    { name: "Guia de Uso", href: "#" },
    { name: "Blog", href: "#" },
  ],
  EMPRESA: [
    { name: "Sobre", href: "#" },
    { name: "Time", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Legal", href: "#" },
  ],
  "FALE CONOSCO": [
    { name: "Suporte", href: "#" },
    { name: "Imprensa", href: "#" },
    { name: "Status", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-bgSecondary">
              Corre Aqui
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              © 2024 Corre Aqui
              <br />
              LTDA.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-bgSecondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-bgSecondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-bgSecondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-bgSecondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-bgSecondary transition-colors">
              Termos e condições
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="#" className="hover:text-bgSecondary transition-colors">
              Política de privacidade
            </Link>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span>Idioma</span>
              <select className="bg-transparent text-gray-500 focus:outline-none">
                <option value="pt-BR">Português</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
