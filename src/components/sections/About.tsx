import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[linear-gradient(90deg,#000000,#555555,#838383)] text-white"
    >
      {/* Overlay sutil para continuidad visual */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center space-y-12">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-[#e9da98]"
          >
            About Me
          </motion.h2>

          {/* Frase principal */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium leading-snug"
          >
            Desarrollo interfaces con un enfoque claro en orden, coherencia y
            trabajo en equipo.
          </motion.p>

          {/* Texto descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Al construir una interfaz, me centro en que cada elemento tenga
            sentido para el usuario final. Me importa que todo esté bien
            estructurado y que la jerarquía visual sea clara, cuidando tanto la
            experiencia como la coherencia del producto.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
