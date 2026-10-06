import { ArrowRight, Code2, Bot, Workflow, MapPin, Sparkles } from 'lucide-react';
import { whatsappLink } from '@/lib/data';

const skills = [
  { label: 'TypeScript / JavaScript', level: 90 },
  { label: 'Python', level: 85 },
  { label: 'React / Next.js', level: 88 },
  { label: 'Flutter / Dart', level: 75 },
  { label: 'PostgreSQL / Databases', level: 82 },
  { label: 'AI / LLM / RAG', level: 80 },
];

const whatIDo = [
  { icon: Code2, text: 'Full-stack web & app development' },
  { icon: Bot, text: 'AI chatbots & RAG systems on your data' },
  { icon: Workflow, text: 'Business automation that saves real hours' },
  { icon: Sparkles, text: 'Affordable, transparent, end-to-end delivery' },
];

export default function About() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: intro */}
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              About Me
            </span>
            <h2 className="heading-2 mt-4 text-balance">
              I build the technology, automate it, and deliver it affordably
            </h2>
            <p className="body-lg mt-5 text-balance">
              I'm Dhana Sekhar — a developer based in Vijayawada who helps businesses across
              India get online, automate their workflows, and leverage AI without the
              enterprise price tag.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              My approach is simple: understand your business problem first, then build the
              right technology to solve it — not the other way around. Whether it's a
              fast-loading website, a Flutter app, an AI automation pipeline, or a RAG
              chatbot, you get working software delivered end-to-end.
            </p>

            <div className="mt-8 space-y-3">
              {whatIDo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-sm font-medium text-ink-800">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: skills + location */}
          <div className="space-y-6">
            <div className="card p-7">
              <h3 className="font-display text-lg font-bold text-ink-900">
                Technical skills
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Built across the stack — from frontend to database to AI.
              </p>
              <div className="mt-6 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-ink-800">{skill.label}</span>
                      <span className="text-ink-400">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card flex items-center gap-4 p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-base font-bold text-ink-900">
                  Vijayawada, Andhra Pradesh
                </div>
                <div className="text-sm text-ink-500">
                  Serving clients across India — remote or on-site
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
