'use client';
import { Container, Box, Title, Text, SimpleGrid, TextInput, Textarea, Select, Button, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconBrandWhatsapp, IconMail, IconCheck } from '@tabler/icons-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './contact.module.css';

export default function ContactPage() {
  const form = useForm({
    initialValues: { name: '', email: '', service: '', budget: '', message: '' },
    validate: {
      name: (v) => v.trim().length < 2 ? 'Name is required' : null,
      email: (v) => !/^\S+@\S+\.\S+$/.test(v) ? 'Valid email required' : null,
      message: (v) => v.trim().length < 10 ? 'Please describe your project (at least 10 characters)' : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const msg = encodeURIComponent(
      `Hi IdealCodes! My name is ${values.name}.\n\nService: ${values.service || 'Not specified'}\nBudget: ${values.budget || 'Not specified'}\n\n${values.message}\n\nEmail: ${values.email}`
    );
    window.open(`https://wa.me/2349021848847?text=${msg}`, '_blank');
    notifications.show({
      title: 'Opening WhatsApp',
      message: 'Your message has been pre-filled — just hit send!',
      icon: <IconCheck size={16} />,
      color: 'green',
    });
    form.reset();
  };

  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Text size="xs" fw={600} className={classes.eyebrow}>Get in Touch</Text>
            <Title order={1} className={classes.title}>Let&apos;s build something great</Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem">
            <AnimatedSection>
              <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <TextInput label="Your name" placeholder="Emeka Okafor" required size="md" {...form.getInputProps('name')} />
                  <TextInput label="Email address" placeholder="emeka@company.com" required size="md" type="email" {...form.getInputProps('email')} />
                  <Select
                    label="Service needed"
                    placeholder="What can we help you with?"
                    size="md"
                    data={[
                      'E-Commerce Store', 'Personal Brand Website', 'Corporate Website',
                      'Real Estate Website', 'Portfolio Website', 'Blog / Events Site',
                      'Website Audit & Optimisation', 'SEO & Performance', 'Not sure yet',
                    ]}
                    {...form.getInputProps('service')}
                  />
                  <Select
                    label="Budget range"
                    placeholder="Approximate budget"
                    size="md"
                    data={['Under $200', '$200–$400', '$400–$800', '$800–$2000', '$2000+']}
                    {...form.getInputProps('budget')}
                  />
                  <Textarea label="About your project" placeholder="Tell us what you need, who your audience is, and any details that matter..." required minRows={5} size="md" {...form.getInputProps('message')} />
                  <Button type="submit" size="lg" className={classes.submitBtn} fullWidth>
                    Send via WhatsApp
                  </Button>
                  <Text size="xs" c="dimmed" ta="center">
                    This opens WhatsApp with your message pre-filled. We respond within 24 hours.
                  </Text>
                </Stack>
              </Box>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Stack gap="xl" mt="xl">
                <Box className={classes.contactCard}>
                  <Box className={classes.contactIcon} style={{ background: 'rgba(37,211,102,0.1)', color: '#25D366' }}>
                    <IconBrandWhatsapp size={22} />
                  </Box>
                  <Box>
                    <Text fw={600} className={classes.contactTitle}>WhatsApp (fastest)</Text>
                    <Text size="sm" c="dimmed" mb="xs">Message us directly for a quick reply</Text>
                    <a href="https://wa.me/2349021848847" target="_blank" rel="noopener noreferrer" className={classes.contactLink}>+234 902 184 8847</a>
                  </Box>
                </Box>
                <Box className={classes.contactCard}>
                  <Box className={classes.contactIcon} style={{ background: 'rgba(37,99,235,0.1)', color: '#2563EB' }}>
                    <IconMail size={22} />
                  </Box>
                  <Box>
                    <Text fw={600} className={classes.contactTitle}>Email</Text>
                    <Text size="sm" c="dimmed" mb="xs">For detailed project briefs and proposals</Text>
                    <a href="mailto:hello@idealcodes.tech" className={classes.contactLink}>hello@idealcodes.tech</a>
                  </Box>
                </Box>
                <Box className={classes.promise}>
                  <Text fw={600} mb="xs" className={classes.promiseTitle}>Our response promise</Text>
                  <Text size="sm" c="dimmed">We respond to every enquiry within 24 hours, usually much faster. No ghosting. No generic auto-replies.</Text>
                </Box>
              </Stack>
            </AnimatedSection>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
