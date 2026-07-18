import { Container, SimpleGrid, Box, Text, Title } from '@mantine/core';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './Stats.module.css';

const stats = [
  { value: '10+', label: 'Projects Delivered', sub: 'and counting' },
  { value: '2–4', label: 'Week Delivery', sub: 'on average' },
  { value: '100%', label: 'Mobile Responsive', sub: 'every project' },
  { value: '90+', label: 'Lighthouse Score', sub: 'performance first' },
];

export function Stats() {
  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 2, sm: 2, md: 4 }} spacing="xl">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <Box className={classes.stat}>
                <Title order={2} className={classes.value}>{s.value}</Title>
                <Text fw={600} size="sm" className={classes.label}>{s.label}</Text>
                <Text size="xs" c="dimmed">{s.sub}</Text>
              </Box>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
