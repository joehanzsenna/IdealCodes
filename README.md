# IdealCodes — Agency Website

Professional web development agency website built with Next.js 15, Mantine UI v7, TypeScript, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Stack

- **Next.js 15** (App Router)
- **Mantine UI v7** (components + dark/light mode)
- **TypeScript**
- **Framer Motion** (scroll animations)
- **@tabler/icons-react**
- **CSS Modules** (per-component styling)

## Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero, Stats, Services, Audit, Process, Portfolio, Testimonials, FAQ, CTA) |
| `/services` | Full services list |
| `/work` | Portfolio / case studies |
| `/about` | About IdealCodes |
| `/pricing` | Pricing tiers |
| `/contact` | Contact form + WhatsApp |
| `/blog` | Blog index |

## Customisation

### Update your details
- `lib/data/projects.ts` — Add/edit portfolio projects
- `lib/data/services.ts` — Edit service descriptions
- `lib/data/pricing.ts` — Update pricing
- `lib/data/testimonials.ts` — Add client testimonials
- `lib/data/faqs.ts` — Edit FAQ content

### Brand colours
Edit `lib/theme.ts` to change the primary colour palette.

### Logo
Replace the icon in `components/layout/Header/Header.tsx` with your actual logo image:
```tsx
import Image from 'next/image';
<Image src="/logo/idealcodes-icon.png" width={36} height={36} alt="IdealCodes" />
```

Add your logo files to `/public/logo/`

### Contact form
The contact form opens WhatsApp by default. To add email delivery:
1. Sign up at [resend.com](https://resend.com) (free tier)
2. Copy `.env.local.example` to `.env.local`
3. Add your `RESEND_API_KEY`
4. Update `app/contact/page.tsx` to POST to a Server Action

## Deployment

```bash
npm run build
```

Deploy to Vercel:
```bash
npx vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Color Scheme

- Dark mode (default): `#0F172A` background, `#1E293B` surfaces
- Light mode: `#F8FAFC` background, `#FFFFFF` surfaces  
- Primary: `#2563EB` (brand blue)
- Accent: `#22D3EE` (cyan)
- Toggle in header top-right

---

Built by [IdealCodes](https://idealcodes.tech)
