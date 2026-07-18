'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Box, Container, Group, Burger, Drawer, Stack,
  Text, Button, ActionIcon, useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './Header.module.css';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleScheme = () =>
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');

  return (
    <Box component="header" className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
      <Container size="xl" className={classes.inner}>
        {/* Logo */}
        <Link href="/" className={classes.logo}>
          <Image
            src="/images/logo.jpeg"
            alt="IdealCodes logo"
            width={36}
            height={36}
            priority
            className={classes.logoIcon}
          />
          <Text fw={700} size="lg" className={classes.logoText}>
            Ideal<span className={classes.logoAccent}>Codes</span>
          </Text>
        </Link>

        {/* Desktop nav */}
        <Group gap="xs" className={classes.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${classes.navLink} ${pathname === link.href ? classes.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </Group>

        {/* Right actions */}
        <Group gap="sm">
          <ActionIcon
            variant="subtle"
            size="lg"
            onClick={toggleScheme}
            aria-label="Toggle color scheme"
            className={classes.themeToggle}
          >
            {computedColorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
          <Button
            component={Link}
            href="/contact"
            size="sm"
            className={classes.ctaBtn}
          >
            Get a Quote
          </Button>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            aria-label="Toggle menu"
          />
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="280px"
        title={
          <Text fw={700} size="lg">
            Ideal<span style={{ color: 'var(--mantine-color-cyan-4)' }}>Codes</span>
          </Text>
        }
        className={classes.drawer}
      >
        <Stack gap="xs" mt="md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${classes.mobileLink} ${pathname === link.href ? classes.mobileLinkActive : ''}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Button
            component={Link}
            href="/contact"
            fullWidth
            mt="md"
            onClick={close}
          >
            Get a Quote
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
