import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, whatsappLink } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <a href="#home" className="group flex items-center gap-2.5" onClick={close}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-brand-400" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            Dhana<span className="text-brand-600">.</span>Sekhar
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-ghost"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            WhatsApp
          </a>
          <a href="#contact" className="btn-primary">
            Free Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="container-px space-y-1 border-t border-ink-200 bg-white pb-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-secondary flex-1"
              >
                WhatsApp
              </a>
              <a href="#contact" onClick={close} className="btn-primary flex-1">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
