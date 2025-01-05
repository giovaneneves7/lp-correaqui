"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            Corre Aqui
          </Link>
          <div className="hidden gap-6 md:flex">
            <Link
              href="#como-funciona"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Como funciona?
            </Link>
            <Link
              href="#seja-parceiro"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Seja um parceiro
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-gray-600 md:inline-block">
            Disponível em
          </span>
          <div className="flex gap-2">
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
            <Button variant="ghost" size="icon">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
