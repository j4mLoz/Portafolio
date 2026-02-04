import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-24 border-t border-[color:var(--color-border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-12"
        >
          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold">
              Juan{" "}
              <span className="text-[color:var(--color-primary)]">Lozano</span>
            </h3>
            <p className="mt-2 text-[color:var(--color-muted)]">
              Frontend Developer
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[color:var(--color-primary)]">
              Contacto
            </p>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:juan@email.com"
                  className="text-[color:var(--color-muted)] hover:text-white transition"
                >
                  juan@email.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  className="text-[color:var(--color-muted)] hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  className="text-[color:var(--color-muted)] hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-16 text-sm text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} Juan Lozano. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
