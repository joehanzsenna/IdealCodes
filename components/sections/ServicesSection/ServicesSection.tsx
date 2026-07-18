import { Container, Box } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { services } from '@/lib/data/services';
import classes from './ServicesSection.module.css';

export function ServicesSection() {
  return (
    <Box component="section" className={classes.section} id="services">
      <Container size="xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What We Build"
            title="Services built for growing businesses"
            subtitle="From your first website to a full digital overhaul — we cover everything your brand needs to thrive online."
            centered
          />
        </AnimatedSection>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.07}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
