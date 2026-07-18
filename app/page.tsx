import { Hero } from '@/components/sections/Hero/Hero';
import { Stats } from '@/components/sections/Stats/Stats';
import { ServicesSection } from '@/components/sections/ServicesSection/ServicesSection';
import { WebsiteAudit } from '@/components/sections/WebsiteAudit/WebsiteAudit';
import { Process } from '@/components/sections/Process/Process';
import { Portfolio } from '@/components/sections/Portfolio/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WebsiteAudit />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
