import { Sparkles, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { navLinks, contactInfo, whatsappLink, phoneLink, emailLink, services } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ink-900">
                <Sparkles className="h-5 w-5 text-brand-600" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Dhana<span className="text-brand-400">.</span>Sekhar
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Affordable AI & digital solutions for businesses. Websites, apps, AI automation,
              and custom software — built and delivered end-to-end.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-400">
              <MapPin className="h-4 w-4 text-brand-400" />
              {contactInfo.location}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-ink-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-brand-400" />
                  WhatsApp: +91 {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={phoneLink}
                  className="flex items-center gap-2.5 text-sm text-ink-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-400" />
                  +91 {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="flex items-center gap-2.5 text-sm text-ink-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-brand-400" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {year} Dhana Sekhar. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-xs text-ink-500">
            Serving clients across India from Vijayawada, Andhra Pradesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
