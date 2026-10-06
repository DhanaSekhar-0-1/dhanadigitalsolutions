import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import {
  contactInfo,
  whatsappLink,
  phoneLink,
  emailLink,
  budgetOptions,
  timelineOptions,
  serviceOptions,
} from '@/lib/data';
import { supabase } from '@/lib/supabase';

type FormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  service_needed: string;
  budget_range: string;
  timeline: string;
  description: string;
};

const initialForm: FormState = {
  name: '',
  business: '',
  phone: '',
  email: '',
  service_needed: '',
  budget_range: '',
  timeline: '',
  description: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        business: form.business || null,
        phone: form.phone,
        email: form.email,
        service_needed: form.service_needed || null,
        budget_range: form.budget_range || null,
        timeline: form.timeline || null,
        description: form.description || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or message me on WhatsApp.'
      );
    }
  };

  const inputClass =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';
  const labelClass = 'mb-1.5 block text-sm font-medium text-ink-800';
  const selectClass = inputClass + ' appearance-none pr-10';

  return (
    <section id="contact" className="section-py bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Get in Touch
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Let's talk about your project
          </h2>
          <p className="body-lg mt-4 text-balance">
            Fill out the form below and I'll get back to you within 24 hours. Or reach me
            directly on WhatsApp — I usually reply faster there.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    WhatsApp
                  </div>
                  <div className="text-sm font-semibold text-ink-900">
                    +91 {contactInfo.phone}
                  </div>
                  <div className="mt-0.5 truncate text-xs text-ink-500">
                    Tap to start a chat
                  </div>
                </div>
              </a>

              <a href={phoneLink} className="card card-hover group flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Phone
                  </div>
                  <div className="text-sm font-semibold text-ink-900">
                    +91 {contactInfo.phone}
                  </div>
                </div>
              </a>

              <a
                href={emailLink}
                className="card card-hover group flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-100 text-ink-700 transition-colors group-hover:bg-ink-900 group-hover:text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Email
                  </div>
                  <div className="truncate text-sm font-semibold text-ink-900">
                    {contactInfo.email}
                  </div>
                </div>
              </a>

              <div className="card flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-ink-900">
                    {contactInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card space-y-5 p-7 sm:p-8"
            >
              {status === 'success' && (
                <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      Message sent successfully!
                    </div>
                    <div className="mt-0.5 text-sm text-ink-600">
                      I'll get back to you within 24 hours. For a faster response, message me on WhatsApp.
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      Couldn't send your message
                    </div>
                    <div className="mt-0.5 text-sm text-ink-600">{errorMsg}</div>
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="business" className={labelClass}>
                    Business / Company
                  </label>
                  <input
                    id="business"
                    type="text"
                    value={form.business}
                    onChange={(e) => update('business', e.target.value)}
                    placeholder="Your business name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="Your phone number"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  What do you need?
                </label>
                <select
                  id="service"
                  value={form.service_needed}
                  onChange={(e) => update('service_needed', e.target.value)}
                  className={selectClass}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Budget range
                  </label>
                  <select
                    id="budget"
                    value={form.budget_range}
                    onChange={(e) => update('budget_range', e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className={labelClass}>
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    value={form.timeline}
                    onChange={(e) => update('timeline', e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select a timeline</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  placeholder="Tell me about your project, your business, and what you're trying to achieve..."
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-ink-400">
                Your details are only used to contact you about your project. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
