import { Container, Title, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container size="sm" style={{ textAlign: 'center', paddingTop: '10rem', paddingBottom: '10rem' }}>
      <Text size="xl" fw={700} c="brand.6" mb="md">404</Text>
      <Title order={1} mb="md">Page not found</Title>
      <Text c="dimmed" mb="xl">
        This page doesn&apos;t exist or was moved. Let&apos;s get you back on track.
      </Text>
      <Group justify="center">
        <Button component={Link} href="/" size="lg">Back to Home</Button>
        <Button component={Link} href="/contact" variant="outline" size="lg">Contact Us</Button>
      </Group>
    </Container>
  );
}
