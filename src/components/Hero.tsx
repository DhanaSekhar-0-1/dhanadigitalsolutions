import { ArrowRight, Sparkles, MapPin, Star } from 'lucide-react';
import { whatsappLink } from '@/lib/data';

const stats = [
  { value: '4', label: 'Real Projects Shipped' },
  { value: '5', label: 'Service Areas' },
  { value: '100%', label: 'Client-Focused' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-50 pt-28 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 grid-bg mask-fade-b" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" aria-hidden />

      <div className="container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink-600 backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-brand-600" />
            Based in Vijayawada · Serving clients across India
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.05s' }}>
            Affordable AI & Digital Solutions{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-brand-600">for Businesses</span>
              <svg className="absolute -bottom-1 left-0 z-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none" aria-hidden>
                <path d="M2 9 Q150 2 298 7" stroke="currentColor" strokeWidth="3" className="text-brand-300" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl body-lg text-balance" style={{ animationDelay: '0.1s' }}>
            I build websites, mobile apps, AI automation, and custom software for B2B companies,
            individuals, YouTubers, content creators, and freelancers — delivered affordably,
            end to end.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.15s' }}>
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Sparkles className="h-4 w-4 text-brand-600" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="animate-fade-up mt-6 flex items-center justify-center gap-2 text-sm text-ink-500" style={{ animationDelay: '0.2s' }}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
              ))}
            </div>
            <span>Trusted by businesses to build & ship real technology</span>
          </div>
        </div>

        <div className="animate-fade-up mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8" style={{ animationDelay: '0.25s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-medium text-ink-500 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-px relative mt-20 pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-wider text-ink-400 sm:text-sm">
            <span>Website Development</span>
            <span className="text-ink-300">•</span>
            <span>App Development</span>
            <span className="text-ink-300">•</span>
            <span>AI Automation</span>
            <span className="text-ink-300">•</span>
            <span>RAG Chatbots</span>
            <span className="text-ink-300">•</span>
            <span>Creator Dashboards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
