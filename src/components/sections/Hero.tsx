import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-32 bg-background overflow-hidden">
      {/* Glow ambiental */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <p className="text-primary text-sm tracking-widest uppercase">
              Frontend Developer
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold  leading-tight">
              Juan <span className="text-primary">Lozano</span>
            </h1>

            <p className="mt-6 text-slate-400 max-w-xl">
              Construyo interfaces cuidadas, funcionales y pensadas al detalle,
              donde cada decisión tiene un propósito.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>Ver proyectos</Button>
              <Button variant="secondary">Contacto</Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative flex items-end justify-center w-48 md:w-64"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
            >
              <div className="flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-90">
                  <img
                    src="../src/assets/PictureJuan.png"
                    alt="Imagen del Hero"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
