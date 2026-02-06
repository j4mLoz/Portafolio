import { motion } from "framer-motion";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      className="
    min-h-screen
    flex items-center
    bg-[linear-gradient(90deg,#000000,#555555,#838383)]
    text-white
  "
    >
      <div className="absolute inset-0 bg-black/20" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-sm uppercase tracking-widest text-[#e9da98]">
              Frontend Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Juan <span className="text-[#e9da98]">Lozano</span>
            </h1>

            <p className="max-w-xl text-lg text-white/80">
              Construyo interfaces cuidadas, funcionales y pensadas al detalle,
              donde cada decisión tiene un propósito.
            </p>
          </motion.div>
          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="../src/assets/JuanLozano.png"
              alt="Foto de Juan"
              className="max-w-sm w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
