import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'gocinema',
    title: 'GoCinema',
    description: 'Cinema booking platform with real-time seat selection, Firebase auth, and a role-based admin dashboard.',
    category: 'Corporate / Booking',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Fastify', 'PostgreSQL'],
    liveUrl: '#',
    color: '#2563EB',
  },
  {
    id: 'beauten',
    title: 'Beauten',
    description: 'Beauty e-commerce platform with Cloudinary media, Paystack checkout, and full admin storefront.',
    category: 'E-Commerce',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Cloudinary', 'Paystack'],
    liveUrl: '#',
    color: '#7c3aed',
  },
  {
    id: 'idealcodes',
    title: 'IdealCodes Agency',
    description: 'This site — built with Next.js 15, Mantine UI, dark/light mode, and Framer Motion animations.',
    category: 'Corporate',
    tech: ['Next.js 15', 'Mantine UI', 'TypeScript', 'Framer Motion'],
    color: '#22D3EE',
  },
];
