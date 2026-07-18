import { Box, Text, Title } from '@mantine/core';
import classes from './SectionHeader.module.css';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false }: Props) {
  return (
    <Box className={`${classes.wrapper} ${centered ? classes.centered : ''}`}>
      {eyebrow && (
        <Text size="xs" fw={600} className={classes.eyebrow}>
          {eyebrow}
        </Text>
      )}
      <Title order={2} className={classes.title}>{title}</Title>
      {subtitle && (
        <Text size="lg" c="dimmed" className={classes.subtitle}>{subtitle}</Text>
      )}
    </Box>
  );
}
