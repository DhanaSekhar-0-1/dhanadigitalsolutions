import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            What I Do
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Five ways I can help your business grow
          </h2>
          <p className="body-lg mt-4 text-balance">
            From a simple website to a full AI automation pipeline — pick what you need,
            or combine services for a complete solution.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isLarge = idx === 0;
            return (
              <div
                key={service.id}
                className={`card card-hover group flex flex-col p-7 ${
                  isLarge ? 'xl:col-span-1 xl:row-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-500">{service.tagline}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* CTA card to fill the 6th slot in 3-col grid */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-ink-900 p-7 text-white">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/20 blur-2xl" aria-hidden />
            <div className="relative">
              <h3 className="font-display text-xl font-bold">
                Not sure which one you need?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Tell me about your business and I'll recommend the right approach —
                no obligation, no jargon.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition-all hover:bg-ink-100 active:scale-[0.98]"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
