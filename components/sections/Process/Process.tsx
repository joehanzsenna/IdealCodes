import { Container, Box, SimpleGrid, Title, Text } from '@mantine/core';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start with a conversation. We learn about your business, goals, target audience, and what you need the website to do. No templates — every project starts fresh.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We build the visual identity and layout before writing a line of code. You approve the design direction before development starts, so there are no surprises.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Clean code, fast load times, mobile-first. We build using modern technology that your business can grow into. You get progress updates throughout.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We deploy, test across devices, and hand over everything. Then we stay available — maintenance, updates, and SEO are all ongoing options.',
  },
];

export function Process() {
  return (
    <Box component="section" className={classes.section} id="process">
      <Container size="xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="How We Work"
            title="From first conversation to live website"
            subtitle="A clear process with no surprises — you know exactly what happens at every stage."
            centered
          />
        </AnimatedSection>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <Box className={classes.step}>
                <Text className={classes.number}>{step.number}</Text>
                <Title order={4} className={classes.stepTitle}>{step.title}</Title>
                <Text size="sm" c="dimmed" className={classes.stepDesc}>{step.description}</Text>
              </Box>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
