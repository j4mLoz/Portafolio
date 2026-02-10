import { motion } from "framer-motion";

export default function ProjectDetails({ details, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="
        absolute inset-0 z-10
        rounded-2xl
        border border-white/30
        bg-[#1f1f1f]
        p-6
        flex flex-col
      "
    >
      <h4 className="text-sm uppercase tracking-widest text-[#e9da98]">
        Detalles del proyecto
      </h4>

      <div className="mt-4 space-y-3 text-sm text-white/80">
        <p>
          <strong className="text-white">Problema:</strong> {details.problem}
        </p>
        <p>
          <strong className="text-white">Decisiones:</strong>{" "}
          {details.decisions}
        </p>
        <p>
          <strong className="text-white">Aprendizajes:</strong>{" "}
          {details.learnings}
        </p>
      </div>

      {/* BOTÓN VOLVER CONTEXTUAL */}
      <button
        onClick={onClose}
        className="
          mt-auto
          text-sm
          underline
          text-[#e9da98]
          cursor-pointer
          hover:opacity-80
          transition-opacity
        "
      >
        Volver
      </button>
    </motion.div>
  );
}
