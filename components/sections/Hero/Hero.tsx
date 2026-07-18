'use client';
import { Container, Title, Text, Button, Group, Badge, Box, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './Hero.module.css';

const techBadges = ['Next.js', 'TypeScript', 'React', 'Supabase', 'Fastify', 'PostgreSQL'];

const codeLines = [
  { indent: 0, text: 'const idealCodes = {', color: 'var(--text-primary)' },
  { indent: 1, text: "  client: 'Your Business',", color: '#22D3EE' },
  { indent: 1, text: "  build: ['E-Commerce', 'Corporate',", color: '#94A3B8' },
  { indent: 1, text: "          'Personal Brand', 'Real Estate'],", color: '#94A3B8' },
  { indent: 1, text: "  deliver: '2-4 weeks',", color: '#22D3EE' },
  { indent: 1, text: "  responsive: true,", color: '#60A5FA' },
  { indent: 1, text: "  seo: 'optimised',", color: '#60A5FA' },
  { indent: 1, text: "  result: 'Business Growth',", color: '#34D399' },
  { indent: 0, text: '};', color: 'var(--text-primary)' },
];

export function Hero() {
  return (
    <Box className={classes.hero}>
      <div className={classes.grid} aria-hidden />
      <Container size="xl" className={classes.inner}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" className={classes.grid2col}>
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={classes.textCol}
          >
            <Badge className={classes.eyebrow} mb="lg">
              🇳🇬 Lagos-based · Worldwide delivery
            </Badge>

            <Title order={1} className={classes.headline}>
              We build{' '}
              <span className={classes.highlight}>digital experiences</span>{' '}
              that grow businesses
            </Title>

            <Text size="lg" className={classes.sub} mt="xl">
              Professional websites for brands ready to establish their online presence.
              Fast, responsive, and built to convert visitors into paying customers.
            </Text>

            <Group mt="2rem" gap="sm">
              <Button
                component={Link}
                href="/work"
                size="lg"
                rightSection={<IconArrowRight size={18} />}
                className={classes.primaryBtn}
              >
                View Our Work
              </Button>
              <Button
                component="a"
                href="https://wa.me/2349021848847?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                leftSection={<IconBrandWhatsapp size={18} />}
                className={classes.waBtn}
              >
                WhatsApp Us
              </Button>
            </Group>

            <Group gap="sm" mt="2.5rem" wrap="wrap">
              {techBadges.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <Badge size="sm" variant="outline" className={classes.techBadge}>{t}</Badge>
                </motion.div>
              ))}
            </Group>
          </motion.div>

          {/* Right — code window */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={classes.visualCol}
          >
            <Box className={classes.codeWindow}>
              <Box className={classes.windowBar}>
                <span className={classes.dot} style={{ background: '#FF5F57' }} />
                <span className={classes.dot} style={{ background: '#FEBC2E' }} />
                <span className={classes.dot} style={{ background: '#28C840' }} />
                <Text size="xs" c="dimmed" ml="sm">idealcodes.config.ts</Text>
              </Box>
              <Box className={classes.codeBody}>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    className={classes.codeLine}
                  >
                    <Text
                      component="span"
                      className={classes.codeText}
                      style={{ color: line.color }}
                    >
                      {line.text}
                    </Text>
                  </motion.div>
                ))}
              </Box>
              {/* Glow accent */}
              <Box className={classes.windowGlow} />
            </Box>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
