import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[linear-gradient(90deg,#000000,#555555,#838383)] text-white"
    >
      {/* Overlay atmosférico */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <Container>
        {/* Usamos el MISMO ancho que Skills */}
        <div className="relative max-w-5xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-[#e9da98]"
          >
            About Me
          </motion.p>

          {/* Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-6 max-w-3xl text-2xl md:text-3xl font-medium leading-snug"
          >
            <strong className="font-semibold">
              Soy frontend developer y disfruto construir interfaces tranquilas,
              claras y bien pensadas.
            </strong>
          </motion.h2>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl space-y-6 text-base md:text-lg text-white/80 leading-relaxed"
          >
            <p>
              Disfruto trabajar en los detalles, en la coherencia visual y en
              que cada decisión tenga sentido para quien usa el producto.
            </p>

            <p>
              Me siento cómodo colaborando en equipos donde{" "}
              <strong className="text-white font-medium">
                el orden, la comunicación y la calidad del producto
              </strong>{" "}
              importan tanto como el resultado final.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
