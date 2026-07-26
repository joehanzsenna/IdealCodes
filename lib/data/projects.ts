import { Project } from '@/lib/types';

// The first 6 projects are featured on the homepage. The full list shows on /work.
export const projects: Project[] = [
  {
    id: 'movies-website',
    title: 'The Movies Website',
    description:
      'A movie discovery platform where users browse trending titles, watch trailers, search by genre, and build a personal watchlist, all powered by a live movie database.',
    category: 'Entertainment / Streaming',
    tech: ['Next.js', 'TypeScript', 'TMDB API', 'Tailwind CSS'],
    liveUrl: '#',
    color: '#2563EB',
    video: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1780881577/Movies-Website.mp4',
  },
  {
    id: 'forever-ecommerce',
    title: 'Forever E-Commerce',
    description:
      'A full-featured fashion store with a product catalogue, cart, secure checkout, order tracking, and an admin dashboard to manage inventory and sales.',
    category: 'E-Commerce',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    color: '#7c3aed',
    video: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781224383/Forever-Ecommerce-Video_rsnwqp.mp4',
  },
  {
    id: 'stream-battle',
    title: 'Stream Battle',
    description:
      'A live-streaming battle platform with smooth new-user registration, profile onboarding, and an interactive experience page where fans join and follow their favourite creators.',
    category: 'Web App / Community',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
    liveUrl: '#',
    color: '#f97316',
    video: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781224505/Stream-Battle-Experience_j8vtwg.mp4',
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    description:
      'A resume-building tool that lets users craft, customise, and download professional CVs from clean templates, with a live preview that updates as they type.',
    category: 'SaaS / Tool',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    color: '#10b981',
    video: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781226485/Resume-Builder-Video_egiyfg.mp4',
  },
  {
    // Placeholder: update with a real project (add a `video` to show a demo reel).
    id: 'project-five',
    title: 'Corporate Website',
    description:
      'A polished corporate website with a service showcase, team section, and lead-capture forms. Replace this with your own project details and demo video.',
    category: 'Corporate',
    tech: ['Next.js', 'TypeScript', 'Mantine UI'],
    liveUrl: '#',
    color: '#0EA5E9',
  },
  {
    // Placeholder: update with a real project (add a `video` to show a demo reel).
    id: 'project-six',
    title: 'Personal Brand Site',
    description:
      'A personal brand site with portfolio, blog, and booking. Replace this with your own project details and demo video.',
    category: 'Personal Brand',
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    liveUrl: '#',
    color: '#e11d48',
  },
];
