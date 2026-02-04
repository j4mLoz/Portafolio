import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Personal",
    description:
      "Portafolio personal desarrollado con enfoque en diseño limpio, jerarquía visual y buenas prácticas frontend.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Interfaz para gestión de datos con componentes reutilizables y estructura escalable.",
    tech: ["React", "JavaScript", "UI/UX"],
  },
  {
    title: "Landing Page Startup",
    description:
      "Landing optimizada para conversión, enfocada en claridad del mensaje y experiencia de usuario.",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <section className="py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-[color:var(--color-primary)]">
              Proyectos
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Algunos proyectos en los que he trabajado
            </h2>
            <p className="mt-6 text-[color:var(--color-muted)]">
              Una selección de trabajos donde aplico diseño, lógica y atención
              al detalle para construir interfaces funcionales y bien
              estructuradas.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl p-6 flex flex-col"
            >
              {/* Título */}
              <h3 className="text-xl font-semibold">{project.title}</h3>

              {/* Preview / Mockup */}
              <div className="mt-4 h-40 rounded-lg bg-[color:var(--color-border)] flex items-center justify-center text-xs text-[color:var(--color-muted)]">
                Preview del proyecto
              </div>

              {/* Descripción */}
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-muted)]">
                {project.description}
              </p>

              {/* Tecnologías */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-[color:var(--color-border)] text-[color:var(--color-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Button variant="secondary">Ver proyecto</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
