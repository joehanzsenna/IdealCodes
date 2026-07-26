'use client';
import { useState, useEffect } from 'react';
import {
  SimpleGrid, Box, Text, Title, Badge, Button, List, ListItem, SegmentedControl, Group,
} from '@mantine/core';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { pricingTiers } from '@/lib/data/pricing';
import classes from './pricing.module.css';

type Currency = 'NGN' | 'USD';
const STORAGE_KEY = 'idealcodes-currency';

export function PricingPlans({ serverCurrency }: { serverCurrency: Currency | null }) {
  const [currency, setCurrency] = useState<Currency>(serverCurrency ?? 'USD');

  useEffect(() => {
    // i, A previous manual choice always wins.
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'NGN' || saved === 'USD') {
      setCurrency(saved);
      return;
    }
    // ii, If the server couldn't detect the country (e.g. local dev / non-Vercel),
    //    fall back to a lightweight client-side IP lookup.
    if (serverCurrency === null) {
      fetch('https://ipapi.co/country/')
        .then((res) => (res.ok ? res.text() : Promise.reject()))
        .then((code) => setCurrency(code.trim() === 'NG' ? 'NGN' : 'USD'))
        .catch(() => {});
    }
  }, [serverCurrency]);

  const handleChange = (value: string) => {
    const next = value as Currency;
    setCurrency(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <>
      <Group justify="flex-start" mb="2.5rem">
        <SegmentedControl
          value={currency}
          onChange={handleChange}
          radius="xl"
          size="xs"
          data={[
            { label: 'Local (₦)', value: 'NGN' },
            { label: 'International ($)', value: 'USD' },
          ]}
          classNames={{ root: classes.switchRoot, indicator: classes.switchIndicator }}
        />
      </Group>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        {pricingTiers.map((tier, i) => {
          const price = currency === 'NGN' ? tier.ngn : tier.usd;
          return (
            <AnimatedSection key={tier.id} delay={i * 0.1} className={classes.cardWrap}>
              <div className={classes.flipPerspective}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currency}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className={classes.flipInner}
                  >
                    <Box className={`${classes.card} ${tier.popular ? classes.popular : ''}`}>
                      {tier.popular && (
                        <Badge className={classes.popularBadge} mb="md">Most Popular</Badge>
                      )}
                      <Text size="xs" fw={600} className={classes.tierName}>{tier.name}</Text>
                      <Box className={classes.priceWrap}>
                        <Title order={2} className={classes.price}>{price}</Title>
                      </Box>
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
                  </motion.div>
                </AnimatePresence>
              </div>
            </AnimatedSection>
          );
        })}
      </SimpleGrid>
    </>
  );
}
