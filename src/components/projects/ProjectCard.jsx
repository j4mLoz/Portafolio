import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import { useGitHubRepo } from "../../hooks/useGitHubRepo";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { data, loading, error } = useGitHubRepo(project.repo);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      Z
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
      {/* CARD BASE */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 bg-[#2f2f2f] p-6 flex flex-col">
        <div className="h-36 rounded-xl bg-black/40 flex items-center justify-center text-sm text-white/60 mb-4">
          PREVIEW
        </div>

        <h3 className="text-lg font-medium text-[#e9da98]">{project.title}</h3>

        <p className="mt-3 text-sm text-white/80 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto space-y-4">
          <ul className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((item) => (
              <li
                key={item}
                className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
          {loading && (
            <p className="text-xs text-white/40 mt-2">
              Cargando datos del repositorio…
            </p>
          )}

          {error && (
            <p className="text-xs text-red-400 mt-2">Error al cargar datos</p>
          )}

          {data && (
            <div className="flex gap-4 text-xs text-white/70 mt-2">
              <span>⭐ {data.stars}</span>
              <span>🍴 {data.forks}</span>
              <span>{data.language}</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <a
              href={project.demo}
              className="
                rounded-full
                bg-[#e9da98]
                px-4 py-2
                text-sm font-medium
                text-black
                hover:bg-[#f3e6b2]
                transition-colors
              "
            >
              Ver proyecto
            </a>

            {/* BOTÓN BASE */}
            <button
              onClick={toggleExpanded}
              className="
                text-sm
                underline
                text-[#e9da98]
                cursor-pointer
                hover:opacity-80
                transition-opacity
              "
            >
              Conoce más
            </button>
          </div>
        </div>
      </div>

      {/* CARD EXTENDIDA */}
      <AnimatePresence>
        {expanded && (
          <ProjectDetails details={project.details} onClose={toggleExpanded} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
