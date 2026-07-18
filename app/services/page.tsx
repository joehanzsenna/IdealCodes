import type { Metadata } from 'next';
import { Container, Box, Title, Text, SimpleGrid } from '@mantine/core';
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { services } from '@/lib/data/services';
import classes from './services.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional web development services — e-commerce, corporate, personal brand, real estate, portfolio, blog, and website audit & optimisation.',
};

export default function ServicesPage() {
  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Text size="xs" fw={600} className={classes.eyebrow}>What We Build</Text>
            <Title order={1} className={classes.title}>
              Every kind of website your business needs
            </Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              From a simple portfolio to a full e-commerce platform — we build it right, the first time.
              And if you already have a site that isn&apos;t working, we fix that too.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box component="section" className={classes.grid}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.06}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <CTABanner />
    </>
  );
}
