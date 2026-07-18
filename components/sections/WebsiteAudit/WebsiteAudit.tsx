import { Container, Box, Title, Text, Button, SimpleGrid, Group } from '@mantine/core';
import Link from 'next/link';
import { IconCheck, IconArrowRight } from '@tabler/icons-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './WebsiteAudit.module.css';

const fixes = [
  'Full SEO audit & keyword strategy',
  'Page speed & Core Web Vitals fix',
  'Mobile responsiveness overhaul',
  'Conversion rate improvements',
  'Google Analytics & Search Console setup',
  'Competitor analysis & positioning',
];

export function WebsiteAudit() {
  return (
    <Box component="section" className={classes.section}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" className={classes.grid}>
          <AnimatedSection>
            <Box className={classes.textSide}>
              <Text size="xs" fw={600} className={classes.eyebrow}>For Existing Websites</Text>
              <Title order={2} className={classes.title}>
                Your website should work as hard as you do
              </Title>
              <Text size="lg" className={classes.body}>
                Already have a website that&apos;s not bringing in business? We audit it,
                fix what&apos;s broken, and turn it into a conversion engine.
                From slow load times to poor SEO and outdated design — we identify
                exactly what&apos;s costing you customers and rebuild what needs rebuilding.
              </Text>
              <Button
                component={Link}
                href="/contact"
                size="lg"
                mt="xl"
                rightSection={<IconArrowRight size={16} />}
                className={classes.cta}
              >
                Get a Free Audit
              </Button>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Box className={classes.featureGrid}>
              {fixes.map((fix) => (
                <Box key={fix} className={classes.featureItem}>
                  <Box className={classes.checkIcon}>
                    <IconCheck size={14} stroke={3} />
                  </Box>
                  <Text size="sm" fw={500} className={classes.featureText}>{fix}</Text>
                </Box>
              ))}
            </Box>
          </AnimatedSection>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
