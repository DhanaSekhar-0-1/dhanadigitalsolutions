import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="section-py bg-ink-50">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Pricing
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Custom pricing based on your requirements
          </h2>
          <p className="body-lg mt-4 text-balance">
            These are starting-from tiers to give you a sense of cost. Every project is scoped
            individually after a free consultation — you only pay for what you need.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-brand-500 bg-white shadow-xl shadow-brand-600/10 lg:-translate-y-3'
                    : 'border-ink-200 bg-white shadow-sm hover:border-ink-300 hover:shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-brand-600/30">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      tier.highlighted
                        ? 'bg-brand-600 text-white'
                        : 'bg-brand-50 text-brand-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{tier.name}</h3>
                    <p className="text-xs text-ink-500">{tier.tagline}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold text-ink-900">
                      {tier.price}
                    </span>
                    <span className="text-sm text-ink-400">/ {tier.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {tier.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.highlighted ? 'text-brand-600' : 'text-brand-500'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <a
                    href="#contact"
                    className={`w-full ${
                      tier.highlighted ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-500">
          Every project includes a free consultation, transparent scope, and post-launch support.
        </p>
      </div>
    </section>
  );
}
