import type { Metadata } from 'next';
import { Container, Box, Title, Text, SimpleGrid, Badge, Button, List, ListItem, Group } from '@mantine/core';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';
import { CTABanner } from '@/components/sections/CTABanner/CTABanner';
import { FAQ } from '@/components/sections/FAQ/FAQ';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { pricingTiers } from '@/lib/data/pricing';
import classes from './pricing.module.css';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for professional website development. Starter from $200, Professional from $400.',
};

export default function PricingPage() {
  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Badge className={classes.launchBadge} mb="lg">🎉 Launch Offer — 20% OFF for first 5 clients</Badge>
            <Title order={1} className={classes.title}>Simple, transparent pricing</Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              No hidden fees. No surprises. You know exactly what you&apos;re paying for before we start.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.id} delay={i * 0.1}>
                <Box className={`${classes.card} ${tier.popular ? classes.popular : ''}`}>
                  {tier.popular && (
                    <Badge className={classes.popularBadge} mb="md">Most Popular</Badge>
                  )}
                  <Text size="xs" fw={600} className={classes.tierName}>{tier.name}</Text>
                  <Title order={2} className={classes.price}>{tier.price}</Title>
                  {tier.price !== 'Custom' && (
                    <Text size="sm" c="dimmed" mb="xs">{tier.naira}</Text>
                  )}
                  <Text size="sm" c="dimmed" className={classes.tierDesc} mb="xl">{tier.description}</Text>
                  <Button
                    component={Link}
                    href="/contact"
                    fullWidth
                    size="md"
                    variant={tier.popular ? 'filled' : 'outline'}
                    className={tier.popular ? classes.popularBtn : classes.outlineBtn}
                    mb="xl"
                  >
                    {tier.cta}
                  </Button>
                  <List spacing={8} className={classes.featureList}>
                    {tier.features.map((f) => (
                      <ListItem
                        key={f}
                        icon={<Box className={classes.checkWrap}><IconCheck size={12} stroke={3} /></Box>}
                        className={classes.feature}
                      >
                        {f}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </AnimatedSection>
            ))}
          </SimpleGrid>

          <AnimatedSection delay={0.3}>
            <Box className={classes.note}>
              <Text size="sm" c="dimmed" ta="center">
                All prices are starting rates. Complex features, custom integrations, or rush delivery may affect the final quote.
                We&apos;ll give you a detailed breakdown before you commit. Payment plans available.
              </Text>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>

      <FAQ />
      <CTABanner />
    </>
  );
}
