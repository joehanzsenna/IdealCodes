import { Container, Box, Accordion, AccordionItem, AccordionControl, AccordionPanel, Text } from '@mantine/core';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { faqs } from '@/lib/data/faqs';
import classes from './FAQ.module.css';

export function FAQ() {
  return (
    <Box component="section" className={classes.section} id="faq">
      <Container size="md">
        <AnimatedSection>
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we get asked a lot"
            subtitle="Can't find what you're looking for? WhatsApp us directly."
            centered
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Accordion
            variant="separated"
            radius="md"
            classNames={{
              item: classes.item,
              control: classes.control,
              panel: classes.panel,
              label: classes.label,
            }}
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={String(i)}>
                <AccordionControl>
                  <Text fw={500} className={classes.question}>{faq.question}</Text>
                </AccordionControl>
                <AccordionPanel>
                  <Text size="sm" c="dimmed" style={{ lineHeight: 1.75 }}>{faq.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
