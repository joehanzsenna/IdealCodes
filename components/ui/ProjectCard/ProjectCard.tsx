import { Box, Text, Title, Badge, Group } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { Project } from '@/lib/types';
import classes from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Box className={classes.card}>
      <Box
        className={classes.visual}
        style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
      >
        <Box
          className={classes.dot}
          style={{ background: project.color }}
        />
        <Text className={classes.initials} style={{ color: project.color }}>
          {project.title.slice(0, 2).toUpperCase()}
        </Text>
      </Box>
      <Box className={classes.body}>
        <Group justify="space-between" align="flex-start" mb="xs">
          <Box>
            <Badge size="xs" variant="light" mb={6}>{project.category}</Badge>
            <Title order={4} className={classes.title}>{project.title}</Title>
          </Box>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={classes.extLink}>
              <IconExternalLink size={16} />
            </a>
          )}
        </Group>
        <Text size="sm" c="dimmed" className={classes.desc}>{project.description}</Text>
        <Group gap={6} mt="md" wrap="wrap">
          {project.tech.map((t) => (
            <Badge key={t} size="xs" variant="outline" className={classes.techBadge}>{t}</Badge>
          ))}
        </Group>
      </Box>
    </Box>
  );
}
