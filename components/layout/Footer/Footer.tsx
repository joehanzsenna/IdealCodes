import Link from 'next/link';
import Image from 'next/image';
import { Container, Group, Text, Stack, Box, SimpleGrid, Divider } from '@mantine/core';
import { IconBrandInstagram, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import classes from './Footer.module.css';

const services = [
  { label: 'E-Commerce Store', href: '/services#ecommerce' },
  { label: 'Personal Brand', href: '/services#personal-brand' },
  { label: 'Corporate Website', href: '/services#corporate' },
  { label: 'Real Estate Site', href: '/services#real-estate' },
  { label: 'Portfolio Website', href: '/services#portfolio' },
  { label: 'Website Audit', href: '/services#audit' },
];

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl" mb="xl">
          {/* Brand */}
          <Stack gap="md">
            <Link href="/" className={classes.logo}>
              <Image
                src="/images/logo.jpeg"
                alt="IdealCodes logo"
                width={34}
                height={34}
                className={classes.logoIcon}
              />
              <Text fw={700} size="lg">
                Ideal<span className={classes.accent}>Codes</span>
              </Text>
            </Link>
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
              We build professional websites that grow businesses online.
              Based in Lagos, serving clients worldwide.
            </Text>
            <Group gap="sm">
              <a href="https://instagram.com/Ideal_Codes" target="_blank" rel="noopener noreferrer" className={classes.social}>
                <IconBrandInstagram size={18} />
              </a>
              <a href="https://wa.me/2349021848847" target="_blank" rel="noopener noreferrer" className={classes.social}>
                <IconBrandWhatsapp size={18} />
              </a>
              <a href="mailto:hello@idealcodes.tech" className={classes.social}>
                <IconMail size={18} />
              </a>
            </Group>
          </Stack>

          {/* Services */}
          <Stack gap="sm">
            <Text fw={600} size="sm" className={classes.colTitle}>Services</Text>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={classes.link}>{s.label}</Link>
            ))}
          </Stack>

          {/* Links */}
          <Stack gap="sm">
            <Text fw={600} size="sm" className={classes.colTitle}>Company</Text>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={classes.link}>{l.label}</Link>
            ))}
          </Stack>

          {/* Contact */}
          <Stack gap="sm">
            <Text fw={600} size="sm" className={classes.colTitle}>Get in touch</Text>
            <Text size="sm" c="dimmed">WhatsApp</Text>
            <a href="https://wa.me/2349021848847" className={classes.contactLink}>+234 902 184 8847</a>
            <Text size="sm" c="dimmed" mt="xs">Email</Text>
            <a href="mailto:hello@idealcodes.tech" className={classes.contactLink}>hello@idealcodes.tech</a>
            <Text size="sm" c="dimmed" mt="xs">Website</Text>
            <a href="https://dot-senna.vercel.app" className={classes.contactLink} target="_blank" rel="noopener noreferrer">dot-senna.vercel.app</a>
          </Stack>
        </SimpleGrid>

        <Divider opacity={0.15} />

        <Group justify="space-between" mt="lg" pb="lg">
          <Text size="xs" c="dimmed">© {new Date().getFullYear()} IdealCodes. All rights reserved.</Text>
          <Text size="xs" c="dimmed">Built with Next.js · Mantine UI</Text>
        </Group>
      </Container>
    </Box>
  );
}
