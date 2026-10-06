import { Github, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-py bg-ink-50">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Proof of Work
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Real projects, shipped to real clients
          </h2>
          <p className="body-lg mt-4 text-balance">
            These aren't mockups or tutorials. Each project below was built and deployed —
            for a real business, institution, or client.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                {/* Visual header */}
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-4 text-xs font-semibold uppercase tracking-wider text-white/80">
                    {project.tech.length} technologies
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-ink-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-ink-900"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Start your project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
