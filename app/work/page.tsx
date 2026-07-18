import type { Metadata } from 'next';
import { Container, Box, Title, Text, SimpleGrid } from '@mantine/core';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { projects } from '@/lib/data/projects';
import classes from './work.module.css';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Projects built by IdealCodes — e-commerce stores, booking platforms, corporate websites, and more.',
};

export default function WorkPage() {
  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Text size="xs" fw={600} className={classes.eyebrow}>Our Work</Text>
            <Title order={1} className={classes.title}>Projects we&apos;re proud of</Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              Real businesses, real challenges, real results. Every project is built from scratch to fit the client&apos;s exact goals.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box component="section" className={classes.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <CTABanner />
    </>
  );
}
