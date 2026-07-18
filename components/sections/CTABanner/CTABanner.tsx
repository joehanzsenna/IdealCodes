import { Container, Box, Title, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';
import { IconBrandWhatsapp, IconArrowRight } from '@tabler/icons-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './CTABanner.module.css';

export function CTABanner() {
  return (
    <Box component="section" className={classes.section}>
      <Container size="md">
        <AnimatedSection>
          <Box className={classes.inner}>
            <Text size="xs" fw={600} className={classes.eyebrow}>Ready to get started?</Text>
            <Title order={2} className={classes.title}>
              Let&apos;s build your brand&apos;s online presence
            </Title>
            <Text size="lg" className={classes.sub}>
              Join businesses across Nigeria and beyond that trust IdealCodes to build
              their digital presence. First 5 new clients get 20% off.
            </Text>
            <Group justify="center" mt="2rem" gap="md">
              <Button
                component={Link}
                href="/contact"
                size="xl"
                rightSection={<IconArrowRight size={18} />}
                className={classes.primaryBtn}
              >
                Get a Free Quote
              </Button>
              <Button
                component="a"
                href="https://wa.me/2349021848847?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                size="xl"
                variant="outline"
                leftSection={<IconBrandWhatsapp size={20} />}
                className={classes.waBtn}
              >
                WhatsApp Now
              </Button>
            </Group>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
