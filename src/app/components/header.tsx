"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl  container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-bgSecondary">
          CORRE A<span style={{color: 'red'}}>Q</span>UI!
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Home
          </Link>
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Quem somos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Features
          </Link>
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Como usar
          </Link>
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Membros
          </Link>
          <Link href="#" className="text-gray-600 hover:text-bgSecondary">
            Contatos
          </Link>
        </nav>
        <Button className="bg-black hover:bg-bgSecondary">DOWNLOAD</Button>
      </div>
    </motion.header>
  );
}
