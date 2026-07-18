import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    description: 'Full-featured online stores that turn browsers into buyers — payment integration, inventory management, and mobile-first checkout.',
    icon: 'ShoppingCart',
    features: ['Paystack / Flutterwave', 'Product management', 'Order tracking', 'Mobile checkout'],
  },
  {
    id: 'personal-brand',
    title: 'Personal Brand Website',
    description: 'Your digital home base. Communicate who you are, what you do, and why clients should choose you.',
    icon: 'User',
    features: ['Bio & portfolio', 'Services showcase', 'Booking integration', 'Blog-ready'],
  },
  {
    id: 'corporate',
    title: 'Corporate Website',
    description: 'Professional websites for businesses ready to establish credibility online. Clean, fast, and built to convert leads.',
    icon: 'Building',
    features: ['Company profile', 'Services pages', 'Team section', 'Enquiry forms'],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Website',
    description: 'Property listing sites with search, filters, and enquiry flows that help agents close deals faster.',
    icon: 'Home',
    features: ['Property listings', 'Search & filter', 'Image galleries', 'Agent profiles'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Show your best work with impact. Built for designers, photographers, and creatives.',
    icon: 'Briefcase',
    features: ['Project gallery', 'Case studies', 'Client logos', 'Contact form'],
  },
  {
    id: 'blog',
    title: 'Blog & Events Site',
    description: 'Content-first websites for publishers, bloggers, and event organisers — built with SEO and audience growth in mind.',
    icon: 'FileText',
    features: ['CMS integration', 'Categories & tags', 'Newsletter opt-in', 'Event listings'],
  },
  {
    id: 'audit',
    title: 'Website Audit & Optimisation',
    description: 'Already have a site that isn\'t converting? We find exactly what\'s broken and fix it — from speed to SEO to conversions.',
    icon: 'Search',
    features: ['Full SEO audit', 'Core Web Vitals fix', 'Conversion analysis', 'Analytics setup'],
    highlight: true,
  },
  {
    id: 'seo',
    title: 'SEO & Performance',
    description: 'Get found on Google. We optimise page speed, meta tags, structure, and content so search engines rank you first.',
    icon: 'TrendingUp',
    features: ['Keyword strategy', 'Technical SEO', '90+ Lighthouse score', 'Search Console setup'],
  },
];
