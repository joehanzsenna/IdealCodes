import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Container, Box, Title, Text, Badge } from '@mantine/core';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { PricingPlans } from './PricingPlans';
import classes from './pricing.module.css';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for professional website development, with local Nigeria and international rates. Starter from ₦500,000 / $800.',
};

export default async function PricingPage() {
  // Vercel provides the visitor's country via this IP header (no external call).
  const country = (await headers()).get('x-vercel-ip-country');
  const serverCurrency = country ? (country === 'NG' ? 'NGN' : 'USD') : null;

  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Badge className={classes.launchBadge} mb="lg">🎉 Launch Offer, 20% OFF for first 5 clients</Badge>
            <Title order={1} className={classes.title}>Simple, transparent pricing</Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              No hidden fees. No surprises. You know exactly what you&apos;re paying for before we start.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container size="xl">
          <PricingPlans serverCurrency={serverCurrency} />

          <AnimatedSection delay={0.3}>
            <Box className={classes.note}>
              <Text size="sm" c="dimmed" ta="center">
                All prices are starting rates. Complex features, custom integrations, or rush delivery may affect the final quote.
                We&apos;ll give you a detailed breakdown before you commit. Payment plans available.
              </Text>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <FAQ />
      <CTABanner />
    </>
  );
}
