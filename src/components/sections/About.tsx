import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function About() {
  return (
    <section className="relative py-32 bg-surface/40">
      <Container>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-widest uppercase"
          >
            Sobre mí
          </motion.p>

          {/* Frase principal */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-6 text-2xl md:text-3xl font-semibold leading-snug"
          >
            Desarrollo interfaces con un enfoque claro en orden, coherencia y
            trabajo en equipo.
          </motion.h2>

          {/* Texto de soporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              Al construir una interfaz, me centro en que cada elemento tenga
              sentido para el usuario final. Me importa que todo esté bien
              estructurado y que la jerarquía visual sea clara.
            </p>

            <p>
              Me siento cómodo trabajando en equipos donde el criterio, la
              claridad y la calidad del producto son una prioridad, buscando
              siempre soluciones bien pensadas y sostenibles en el tiempo.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
