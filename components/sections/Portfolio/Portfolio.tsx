import { Container, Box, Button, SimpleGrid, Group } from '@mantine/core';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { projects } from '@/lib/data/projects';
import classes from './Portfolio.module.css';

export function Portfolio() {
  return (
    <Box component="section" className={classes.section} id="work">
      <Container size="xl">
        <AnimatedSection>
          <Group justify="space-between" align="flex-end" mb="3rem" wrap="wrap" gap="lg">
            <SectionHeader
              eyebrow="Our Work"
              title="Projects we're proud of"
              subtitle="Real businesses. Real results."
            />
            <Button
              component={Link}
              href="/work"
              variant="outline"
              rightSection={<IconArrowRight size={16} />}
              className={classes.allBtn}
            >
              View All Work
            </Button>
          </Group>
        </AnimatedSection>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
