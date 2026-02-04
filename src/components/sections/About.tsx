import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function About() {
  return (
    <section className="relative py-28 bg-surface/40">
      <Container>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm tracking-widest uppercase">
              Sobre mí
            </p>
          </motion.div>

          {/* Texto */}
          <div className="mt-6 space-y-4 text-slate-400">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                Soy desarrollador frontend enfocado en crear interfaces claras,
                bien estructuradas y alineadas con el objetivo real del
                producto.
              </p>

              <p>
                Trabajo con sistemas de componentes sólidos, cuidando tanto la
                experiencia de usuario como la calidad del código.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
