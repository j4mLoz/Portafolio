import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "../ui/ContactModal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="relative py-24 bg-[linear-gradient(90deg,#000000,#555555,#838383)] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <Container>
        <div className="relative max-w-5xl mx-auto">
          {/* Línea separadora */}
          <div className="mb-16">
            <span className="block w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* BLOQUE SUPERIOR */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            {/* Texto */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="max-w-md text-lg text-white/80"
            >
              Si te interesa cómo trabajo y crees que puedo aportar valor a tu
              equipo o proyecto, podemos hablar.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => setIsOpen(true)}
                className="
    inline-block
    rounded-full
    bg-[#e9da98]
    px-8
    py-3
    text-sm
    font-medium
    text-black
    cursor-pointer
    transition-colors
    hover:bg-[#f3e6b2]
  "
              >
                Hablemos
              </button>
            </motion.div>
          </div>

          {/* BLOQUE INFERIOR */}
          <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-sm text-white/70">
            {/* Links */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://github.com/j4mLoz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e9da98] cursor-pointer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/juan-lozano-9b97a83a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#e9da98] cursor-pointer"
              >
                LinkedIn
              </a>

              <a
                href="mailto:juan.lozaa2812@gmail.com"
                className="underline hover:text-[#e9da98] cursor-pointer"
              >
                Email
              </a>

              {/* PLUS escalable */}
              <span className="text-white/40">
                Disponible para nuevas oportunidades
              </span>
            </div>

            {/* Copyright */}
            <span className="text-xs text-white/40">
              © {new Date().getFullYear()} Juan Lozano
            </span>
          </div>
        </div>
      </Container>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  );
}
