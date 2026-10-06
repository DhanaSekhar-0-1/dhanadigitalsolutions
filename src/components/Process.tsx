import { processSteps } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className="section-py bg-ink-950 text-white">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            A clear process from first call to launch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg text-balance">
            No black boxes. You always know what's happening, what's next, and what it costs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl font-bold text-white/10">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {step.description}
                </p>

                {/* Connector arrow */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-white/20 xl:flex">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
