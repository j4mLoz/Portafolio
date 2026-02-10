import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";

const projects = [
  {
    title: "Portfolio personal",
    description:
      "Portfolio diseñado y desarrollado con foco en claridad visual, jerarquía y experiencia de usuario.",
    tech: ["React", "Tailwind", "Framer Motion"],
    details: {
      problem: "Comunicar mi perfil profesional de forma clara y honesta.",
      decisions:
        "Jerarquía visual, animaciones sutiles y coherencia entre secciones.",
      learnings: "Cómo los pequeños detalles elevan la percepción de calidad.",
    },
    demo: "#",
  },
  {
    title: "Dashboard administrativo",
    description:
      "Interfaz para gestión de información pensada para escalar sin perder claridad.",
    tech: ["React", "Node.js"],
    details: {
      problem:
        "Visualizar grandes volúmenes de datos sin sobrecargar al usuario.",
      decisions: "Componentes reutilizables y estructura clara.",
      learnings: "La simplicidad es clave para productos complejos.",
    },
    demo: "#",
  },
  {
    title: "Landing de producto",
    description:
      "Landing enfocada en comunicar valor y guiar al usuario a la acción.",
    tech: ["React", "UI/UX"],
    details: {
      problem: "Transmitir el mensaje principal en pocos segundos.",
      decisions: "Jerarquía clara y CTA bien definidos.",
      learnings: "Menos contenido puede generar más conversión.",
    },
    demo: "#",
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      className="relative h-[460px]"
    >
      {/* Card base */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 bg-[#2f2f2f] p-6">
        <div className="mb-6 h-36 rounded-xl bg-black/40 flex items-center justify-center text-sm text-white/60">
          PREVIEW
        </div>

        <h3 className="text-lg font-medium text-[#e9da98]">{project.title}</h3>

        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías visibles */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((item) => (
            <li
              key={item}
              className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <a
            href={project.demo}
            className="
              rounded-full
              bg-[#e9da98]
              px-4
              py-2
              text-sm
              font-medium
              text-black
              cursor-pointer
              transition-colors
              hover:bg-[#f3e6b2]
            "
          >
            Ver proyecto
          </a>

          <button
            onClick={() => setExpanded(true)}
            className="text-sm underline text-[#e9da98] cursor-pointer"
          >
            Conoce más
          </button>
        </div>
      </div>

      {/* Card extendida */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="
              absolute inset-0
              rounded-2xl
              border border-white/30
              bg-[#1f1f1f]
              p-6
              z-10
            "
          >
            <h4 className="text-sm uppercase tracking-widest text-[#e9da98]">
              Detalles del proyecto
            </h4>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p>
                <strong className="text-white">Problema:</strong>{" "}
                {project.details.problem}
              </p>
              <p>
                <strong className="text-white">Decisiones:</strong>{" "}
                {project.details.decisions}
              </p>
              <p>
                <strong className="text-white">Aprendizajes:</strong>{" "}
                {project.details.learnings}
              </p>
            </div>

            <button
              onClick={() => setExpanded(false)}
              className="mt-6 text-sm underline text-[#e9da98] cursor-pointer"
            >
              Volver
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-[linear-gradient(90deg,#000000,#555555,#838383)] text-white"
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <Container>
        <div className="relative max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#e9da98]">
            Projects
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-medium">
            Algunos proyectos en los que he trabajado
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
