import Container from "../ui/Container";
import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";

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

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
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
