import { Container, Box, SimpleGrid, Text, Avatar, Group, Rating } from '@mantine/core';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { testimonials } from '@/lib/data/testimonials';
import classes from './Testimonials.module.css';

export function Testimonials() {
  return (
    <Box component="section" className={classes.section}>
      <Container size="xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Client Stories"
            title="What clients say about us"
            subtitle="We measure success by the growth our clients experience after working with us."
            centered
          />
        </AnimatedSection>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.12}>
              <Box className={classes.card}>
                <Rating value={t.rating} readOnly size="xs" mb="md" />
                <Text size="sm" className={classes.quote}>
                  &ldquo;{t.content}&rdquo;
                </Text>
                <Group mt="lg" gap="sm">
                  <Avatar color="blue" radius="xl" size="md" style={{ background: t.color }}>
                    {t.initials}
                  </Avatar>
                  <Box>
                    <Text size="sm" fw={600} className={classes.name}>{t.name}</Text>
                    <Text size="xs" c="dimmed">{t.role}, {t.company}</Text>
                  </Box>
                </Group>
              </Box>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
