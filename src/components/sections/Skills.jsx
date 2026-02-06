import Container from "../ui/Container";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "UI & UX",
    items: [
      "Responsive Design",
      "Accesibilidad",
      "Jerarquía visual",
      "Design systems",
    ],
  },
  {
    category: "Herramientas",
    items: ["Git & GitHub", "Vite", "NPM", "Figma"],
  },
  {
    category: "Buenas prácticas",
    items: [
      "Componentización",
      "Código limpio",
      "Reutilización",
      "Escalabilidad",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-widest text-[color:var(--color-primary)]">
            Skills
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Habilidades y enfoque de trabajo
          </h2>
          <p className="mt-6 text-[color:var(--color-muted)]">
            Un resumen de las tecnologías y prácticas que utilizo para construir
            interfaces sólidas, mantenibles y bien pensadas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                {skillGroup.category}
              </h3>

              <ul className="space-y-2">
                {skillGroup.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-[color:var(--color-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
