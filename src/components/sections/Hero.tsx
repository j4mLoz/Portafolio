import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-28 bg-background overflow-hidden">
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
              className="relative"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
            >
              {/* 1. El Fondo con Color (El círculo/forma de atrás) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 z-0" />

              {/* 2. El Contenedor de la Imagen */}
              <div className="relative w-48 h-64 md:w-64 md:h-80 overflow-visible flex items-end justify-center">
                <img
                  src="../src/assets/JuanLozano.png"
                  alt="Foto de Juan"
                  className="
          relative
          z-20
          h-full 
          w-auto
          object-contain
          transition-transform
          duration-300
          hover:scale-105
        "
                  style={{
                    // Este es el truco clave:
                    maskImage: "linear-gradient(to top, black 80%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 80%, black 100%)",
                  }}
                />

                {/* 3. El borde del círculo (opcional para dar profundidad) */}
                <div className="absolute bottom-0 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/20 z-10 pointer-events-none" />
              </div>

              {/* 4. La Firma (Jacob Jon) - Si la tienes como imagen aparte */}
              <div className="absolute bottom-4 right-[-20px] z-30 transform rotate-[-5deg]">
                {/* <img src="firma.png" className="w-24 md:w-32" /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
