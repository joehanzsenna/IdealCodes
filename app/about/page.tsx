import type { Metadata } from 'next';
import { Container, Box, Title, Text, SimpleGrid, Group, Badge, Stack } from '@mantine/core';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'IdealCodes — who we are, how we work, and why we build websites that grow businesses.',
};

const techStack = ['Next.js', 'TypeScript', 'React', 'Supabase', 'Firebase', 'Fastify', 'Prisma', 'PostgreSQL', 'Tailwind', 'Mantine UI'];
const values = [
  { title: 'Quality over quantity', desc: 'We take on a limited number of projects so every website gets our full attention.' },
  { title: 'Communication first', desc: 'You get regular updates. You always know where your project is. No radio silence.' },
  { title: 'Built to last', desc: 'Every site is coded to modern standards — fast, secure, and easy to maintain long term.' },
  { title: 'Results-driven', desc: 'A beautiful website that doesn\'t convert is just an expensive art project. We build for outcomes.' },
];

export default function AboutPage() {
  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Text size="xs" fw={600} className={classes.eyebrow}>About IdealCodes</Text>
            <Title order={1} className={classes.title}>
              The ideal way to build your digital business
            </Title>
          </AnimatedSection>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" className={classes.storyGrid}>
            <AnimatedSection>
              <Box>
                <Title order={2} className={classes.h2} mb="lg">Who we are</Title>
                <Stack gap="md">
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    IdealCodes is a Lagos-based web development agency founded by Jonathan Edison — a full-stack developer 
                    with a mission to help African businesses and brands establish a powerful, credible online presence.
                  </Text>
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    We work with entrepreneurs, SMBs, corporates, and creatives who want more than just a pretty website.
                    We build digital platforms that attract customers, build trust, and drive business growth.
                  </Text>
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    Whether you need an e-commerce store, a personal brand site, or want to fix an existing website 
                    that isn&apos;t converting — IdealCodes has you covered.
                  </Text>
                </Stack>

                <Box mt="2rem">
                  <Text fw={600} size="sm" mb="md" className={classes.stackLabel}>Our Tech Stack</Text>
                  <Group gap="sm" wrap="wrap">
                    {techStack.map((t) => (
                      <Badge key={t} variant="outline" size="sm" className={classes.techBadge}>{t}</Badge>
                    ))}
                  </Group>
                </Box>
              </Box>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Title order={2} className={classes.h2} mb="lg">What we stand for</Title>
              <Stack gap="md">
                {values.map((v) => (
                  <Box key={v.title} className={classes.valueCard}>
                    <Text fw={600} size="sm" className={classes.valueTitle}>{v.title}</Text>
                    <Text size="sm" c="dimmed">{v.desc}</Text>
                  </Box>
                ))}
              </Stack>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>
      <CTABanner />
    </>
  );
}
