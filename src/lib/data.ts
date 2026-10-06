import {
  Globe,
  Smartphone,
  Workflow,
  Bot,
  LayoutDashboard,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Github,
  ExternalLink,
  Star,
  Sparkles,
  Code2,
  Database,
  Layers,
  Zap,
  Target,
  Rocket,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  Server,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    tagline: 'Fast, modern, conversion-focused sites',
    description:
      'Business websites, landing pages, dashboards, and booking sites built with modern tech — optimized for speed, SEO, and conversions.',
    features: [
      'Business websites & landing pages',
      'Admin dashboards & internal tools',
      'Booking & appointment sites',
      'SEO-optimized & fast-loading',
    ],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Android & Flutter apps that ship',
    description:
      'Native Android and cross-platform Flutter apps for business and customer-facing use — from MVP to production.',
    features: [
      'Android apps (Kotlin/Java)',
      'Flutter cross-platform apps',
      'Business & customer apps',
      'API integration & push notifications',
    ],
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'AI Automation',
    tagline: 'Automate the busywork, scale your reach',
    description:
      'AI-powered lead intake pipelines, WhatsApp/email workflows, and reporting automation that save hours every week.',
    features: [
      'Lead intake & qualification pipelines',
      'WhatsApp & email workflow automation',
      'Automated reporting & notifications',
      'Integration with your existing tools',
    ],
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Solutions',
    tagline: 'RAG chatbots & AI assistants',
    description:
      'Retrieval-Augmented Generation chatbots, AI assistants, and document Q&A systems that understand your business data.',
    features: [
      'RAG chatbots on your data',
      'AI assistants for customer support',
      'Document Q&A systems',
      'Custom LLM integrations',
    ],
  },
  {
    id: 'dashboards',
    icon: LayoutDashboard,
    title: 'Freelancer/Creator Dashboards',
    tagline: 'Manage clients, reporting & links',
    description:
      'Client management, reporting, and link-in-bio-style tools built for freelancers and content creators.',
    features: [
      'Client management systems',
      'Reporting & analytics dashboards',
      'Link-in-bio style tools',
      'Custom workflows for creators',
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl: string;
  icon: LucideIcon;
  accent: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 'eyewear-ai-oms',
    name: 'Eyewear-AI-OMS',
    subtitle: 'AI-Powered Order Management System',
    description:
      'A full-stack AI-powered Order Management System for an eyewear retail business. Handles orders, inventory, and AI-driven insights with a production-ready architecture.',
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://eyewear-ai-oms.vercel.app',
    githubUrl: 'https://github.com/DhanaSekhar-0-1/Eyewear-AI-OMS',
    icon: Database,
    accent: 'from-brand-500 to-accent-500',
    highlights: [
      'Full-stack architecture with TypeScript + Python',
      'PostgreSQL database with Docker deployment',
      'AI-driven order & inventory management',
      'Live demo deployed on Vercel',
    ],
  },
  {
    id: 'student-management',
    name: 'Student Management System',
    subtitle: 'Institution & Student Management — Microlinks',
    description:
      'A mobile institution/student management system built for Microlinks. Manages student records, attendance, and institutional workflows from a Flutter app.',
    tech: ['Dart', 'Flutter', 'JavaScript'],
    demoUrl: undefined,
    githubUrl: 'https://github.com/DhanaSekhar-0-1/Student_managment_System',
    icon: Smartphone,
    accent: 'from-accent-500 to-brand-400',
    highlights: [
      'Cross-platform Flutter mobile app',
      'Student records & attendance management',
      'Built for a real institution (Microlinks)',
      'Dart + JavaScript backend integration',
    ],
  },
  {
    id: 'ai-automation-pipeline',
    name: 'AI Automation Pipeline',
    subtitle: 'Lead Intake & Response Automation — BookLeaf Publishing',
    description:
      'An AI-powered lead intake and response automation pipeline built for BookLeaf Publishing. Automates lead capture, qualification, and response workflows.',
    tech: ['Python'],
    demoUrl: undefined,
    githubUrl: 'https://github.com/DhanaSekhar-0-1/AI_Automation',
    icon: Workflow,
    accent: 'from-brand-600 to-accent-600',
    highlights: [
      'Real business automation delivered to a client',
      'AI-powered lead intake & qualification',
      'Automated response workflow pipeline',
      'Python-based production pipeline',
    ],
  },
  {
    id: 'rag-chatbot',
    name: 'RAG Chatbot',
    subtitle: 'Retrieval-Augmented Generation Chatbot',
    description:
      'A Retrieval-Augmented Generation chatbot that answers questions grounded in your own documents. Combines LLM reasoning with a retrieval layer for accurate, sourced responses.',
    tech: ['Python'],
    demoUrl: undefined,
    githubUrl: 'https://github.com/DhanaSekhar-0-1/RAG-chatbot',
    icon: Bot,
    accent: 'from-accent-600 to-brand-500',
    highlights: [
      'Retrieval-Augmented Generation architecture',
      'Document-grounded Q&A with sources',
      'LLM + vector retrieval pipeline',
      'Custom Python implementation',
    ],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    description:
      'We start with a free consultation to understand your business, your problem, and what success looks like — no jargon, no pressure.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Proposal & Scope',
    description:
      'You get a clear proposal with scope, timeline, and pricing. Everything is transparent — no hidden costs, no surprises later.',
    icon: Layers,
  },
  {
    step: '03',
    title: 'Design & Build',
    description:
      'I build your solution iteratively, with regular check-ins so you see progress early and can give feedback as it takes shape.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Test & Deploy',
    description:
      'Everything is tested across devices and edge cases, then deployed to production with proper hosting and documentation.',
    icon: Rocket,
  },
  {
    step: '05',
    title: 'Support & Iterate',
    description:
      'After launch, I provide support and help you iterate based on real user feedback — because the first version is never the final one.',
    icon: ShieldCheck,
  },
];

export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: LucideIcon;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    tagline: 'For a quick online presence',
    price: '₹10,000',
    period: 'starting from',
    description: 'A clean, fast, mobile-responsive website to get your business online.',
    features: [
      'Up to 5-page business website',
      'Mobile-responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '1 round of revisions',
      'Deployment & hosting setup',
    ],
    cta: 'Get Started',
    icon: Rocket,
  },
  {
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    price: '₹25,000',
    period: 'starting from',
    description: 'A custom website or app with automation and integrations tailored to your workflow.',
    features: [
      'Custom website or web app',
      'Dashboard or booking system',
      'AI automation pipeline',
      'Third-party API integrations',
      '3 rounds of revisions',
      '30 days post-launch support',
    ],
    cta: 'Get a Free Consultation',
    highlighted: true,
    icon: Zap,
  },
  {
    name: 'Custom AI',
    tagline: 'For AI & automation projects',
    price: 'Custom',
    period: 'based on requirements',
    description: 'RAG chatbots, AI assistants, document Q&A, and end-to-end automation systems.',
    features: [
      'RAG chatbot or AI assistant',
      'Document Q&A system',
      'End-to-end automation pipeline',
      'Custom LLM integrations',
      'Dedicated support & maintenance',
      'Flexible timeline & scope',
    ],
    cta: 'Discuss Your Project',
    icon: Cpu,
  },
];

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const contactInfo = {
  phone: '9182609291',
  email: 'dhanasekhardandugula@gmail.com',
  location: 'Vijayawada, Andhra Pradesh, India',
  whatsappMessage:
    'Hi, I found your website and would like to discuss a digital solution for my business.',
};

export const whatsappLink = `https://wa.me/91${contactInfo.phone}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
export const phoneLink = `tel:+91${contactInfo.phone}`;
export const emailLink = `mailto:${contactInfo.email}`;

export const budgetOptions = [
  'Under ₹10,000',
  '₹10,000 — ₹25,000',
  '₹25,000 — ₹50,000',
  '₹50,000 — ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
];

export const timelineOptions = [
  'ASAP (within 1 week)',
  '2–4 weeks',
  '1–2 months',
  '3+ months',
  'Flexible',
];

export const serviceOptions = [
  'Website Development',
  'App Development',
  'AI Automation',
  'AI Solutions (RAG/Chatbot)',
  'Freelancer/Creator Dashboard',
  'Something else',
];

export {
  Globe,
  Smartphone,
  Workflow,
  Bot,
  LayoutDashboard,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Github,
  ExternalLink,
  Star,
  Sparkles,
  Code2,
  Database,
  Layers,
  Zap,
  Target,
  Rocket,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  Server,
  Cpu,
};
