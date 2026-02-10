import { motion } from "framer-motion";
import Container from "../ui/Container";

const skills = [
  {
    title: "Construcción de interfaces",
    description:
      "Me enfoco en construir interfaces claras, coherentes y fáciles de entender, cuidando tanto la estructura como el detalle visual.",
    items: ["React", "Componentización", "Tailwind CSS", "Jerarquía visual"],
  },
  {
    title: "Arquitectura frontend",
    description:
      "Trabajo con estructuras bien pensadas que permiten mantener, escalar y evolucionar el producto sin perder claridad.",
    items: [
      "Estructura de proyectos",
      "Reutilización de componentes",
      "Separación de responsabilidades",
    ],
  },
  {
    title: "Experiencia de usuario",
    description:
      "Busco que las interfaces se sientan naturales al usarse, cuidando el ritmo, las interacciones y la lectura visual.",
    items: [
      "Claridad visual",
      "Micro-interacciones sutiles",
      "Accesibilidad básica",
    ],
  },
  {
    title: "Calidad y mantenimiento",
    description:
      "Valoro el código limpio y el trabajo sostenible, pensando siempre en la colaboración y el largo plazo.",
    items: ["Buenas prácticas", "Commits claros", "Código mantenible"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[linear-gradient(90deg,#000000,#555555,#838383)] text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <Container>
        <div className="relative max-w-5xl mx-auto">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-[#e9da98]"
          >
            Skills
          </motion.p>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-4xl font-medium"
          >
            Cómo trabajo y qué priorizo al construir productos
          </motion.h2>

          {/* Grid de skills */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + index * 0.05,
                }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xl font-medium text-white">
                  {skill.title}
                </h3>

                <p className="text-white/80 leading-relaxed">
                  {skill.description}
                </p>

                <ul className="flex flex-wrap gap-2 pt-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm px-3 py-1 rounded-full border border-white/20 text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
