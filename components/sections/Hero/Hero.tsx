'use client';
import { useState, useEffect, useRef } from 'react';
import { Container, Title, Text, Button, Group, Badge, Box, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './Hero.module.css';

const techBadges = [
  'Next.js', 'TypeScript', 'React', 'Supabase', 'Fastify', 'PostgreSQL',
  'Node.js', 'Tailwind CSS', 'Mantine', 'Firebase', 'Stripe',
];
const marqueeBadges = Array.from({ length: 5 }).flatMap(() => techBadges);

// Video slides shown in the hero showcase
const videoSlides = [
  {
    label: 'Forever E-Commerce Website',
    src: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781224383/Forever-Ecommerce-Video_rsnwqp.mp4',
  },
  {
    label: 'Resume Builder Website',
    src: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781226485/Resume-Builder-Video_egiyfg.mp4',
  },
  {
    label: 'Stream Battle Experience',
    src: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1781224505/Stream-Battle-Experience_j8vtwg.mp4',
  },
  {
    label: 'The Movies Website',
    src: 'https://res.cloudinary.com/dnd3am4dm/video/upload/v1780881577/Movies-Website.mp4',
  },
];

const SLIDE_COUNT = videoSlides.length + 1; // code window + videos
const SLIDE_INTERVAL = 8000;

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
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(true);
  const stackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause the whole showcase (timer + video decoding) when it's off-screen.
  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate every 5s, only while visible.
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDE_COUNT),
      SLIDE_INTERVAL
    );
    return () => clearInterval(id);
  }, [inView]);

  // Play only the active video (and only while in view); pause the rest.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (inView && active === i + 1) {
        video.muted = true; // ensure muted so autoplay isn't blocked
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, inView]);

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
              {/* TODO: Decide if to either use Lagos based or not */}
              {/* Lagos-based · */}
               Worldwide delivery
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

          </motion.div>

          {/* Right — rotating showcase (code window + videos) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={classes.visualCol}
          >
            <Box className={classes.mediaStack} ref={stackRef}>
              {/* Slide 0 — code window */}
              <div
                className={`${classes.slide} ${active === 0 ? classes.slideActive : ''}`}
                aria-hidden={active !== 0}
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
                  <Box className={classes.windowGlow} />
                </Box>
              </div>

              {/* Video slides */}
              {videoSlides.map((v, idx) => (
                <div
                  key={v.src}
                  className={`${classes.slide} ${active === idx + 1 ? classes.slideActive : ''}`}
                  aria-hidden={active !== idx + 1}
                >
                  <Box className={classes.codeWindow}>
                    <Box className={classes.windowBar}>
                      <span className={classes.dot} style={{ background: '#FF5F57' }} />
                      <span className={classes.dot} style={{ background: '#FEBC2E' }} />
                      <span className={classes.dot} style={{ background: '#28C840' }} />
                      <Text size="xs" c="dimmed" ml="sm">{v.label}</Text>
                    </Box>
                    <video
                      ref={(el) => {
                        if (el) el.muted = true;
                        videoRefs.current[idx] = el;
                      }}
                      className={classes.video}
                      src={v.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      tabIndex={-1}
                    />
                  </Box>
                </div>
              ))}

              {/* Glow accent (shared, sits behind the window) */}
              <Box className={classes.stackGlow} />

              {/* Slide indicators */}
              <div className={classes.slideDots}>
                {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`${classes.slideDot} ${active === i ? classes.slideDotActive : ''}`}
                    aria-label={`Show slide ${i + 1}`}
                    aria-current={active === i}
                  />
                ))}
              </div>
            </Box>
          </motion.div>
        </SimpleGrid>
      </Container>

      {/* Full-width tech-stack marquee (left → right, pauses on hover) */}
      <Box className={classes.marquee} aria-label="Our tech stack">
        <div className={classes.marqueeTrack}>
          {[...marqueeBadges, ...marqueeBadges].map((t, i) => (
            <Badge
              key={i}
              size="md"
              variant="outline"
              className={`${classes.techBadge} ${classes.marqueeItem}`}
              aria-hidden={i >= marqueeBadges.length}
            >
              {t}
            </Badge>
          ))}
        </div>
      </Box>
    </Box>
  );
}
