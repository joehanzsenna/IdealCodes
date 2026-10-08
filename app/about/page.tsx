import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, Box, Title, Text, SimpleGrid, Group, Badge, Stack } from '@mantine/core';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import classes from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'IdealCodes, who we are, how we work, and why we build websites that grow businesses.',
};

const techStack = ['Next.js', 'TypeScript', 'React', 'Supabase', 'Firebase', 'Fastify', 'Prisma', 'PostgreSQL', 'Tailwind', 'Mantine UI'];
const values = [
  { title: 'Quality over quantity', desc: 'We take on a limited number of projects so every website gets our full attention.' },
  { title: 'Communication first', desc: 'You get regular updates. You always know where your project is. No radio silence.' },
  { title: 'Built to last', desc: 'Every site is coded to modern standards, fast, secure, and easy to maintain long term.' },
  { title: 'Results-driven', desc: 'A beautiful website that doesn\'t convert is just an expensive art project. We build for outcomes.' },
];

const galleryImages = [
  // Hero tile: tall on desktop/tablet, full-width banner on mobile.
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=75', alt: 'Team collaborating around laptops', sizes: '(max-width: 40em) 100vw, (max-width: 62em) 33vw, 25vw' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=75', alt: 'Lines of code on a screen', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 25vw' },
  // Wide tile on desktop (spans 2 columns).
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=75', alt: 'Team discussing a project', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 50vw' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=75', alt: 'Clean modern workspace desk', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 25vw' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=75', alt: 'Designers collaborating on a project', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 25vw' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=75', alt: 'Laptop displaying code', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 25vw' },
  // Full-width banner tile on desktop only.
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=70', alt: 'Startup team in a meeting', sizes: '(max-width: 40em) 50vw, (max-width: 62em) 33vw, 100vw' },
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
                    IdealCodes is a Lagos-based web development agency founded by Jonathan Edison, a full-stack developer 
                    with a mission to help African businesses and brands establish a powerful, credible online presence.
                  </Text>
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    We work with entrepreneurs, SMBs, corporates, and creatives who want more than just a pretty website.
                    We build digital platforms that attract customers, build trust, and drive business growth.
                  </Text>
                  <Text c="dimmed" style={{ lineHeight: 1.8 }}>
                    Whether you need an e-commerce store, a personal brand site, or want to fix an existing website 
                    that isn&apos;t converting, IdealCodes has you covered.
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

      <Box className={classes.gallerySection}>
        <Container size="xl">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Behind the Work"
              title="A glimpse into how we build"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className={classes.galleryGrid}>
              {galleryImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`${classes.galleryItem} ${i === 0 ? classes.galleryHero : ''}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={img.sizes}
                    className={classes.galleryImg}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Box>

      <CTABanner />
    </>
  );
}
