'use client';
import { useRef, useEffect, useState } from 'react';
import { Box, Text, Title, Badge, Group, Button, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconPlayerPlayFilled } from '@tabler/icons-react';
import { Project } from '@/lib/types';
import classes from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const previewRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 48em)');

  // Track whether the card is on-screen.
  useEffect(() => {
    const video = previewRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Play the muted preview only while on-screen and the modal is closed.
  useEffect(() => {
    const video = previewRef.current;
    if (!video) return;
    if (inView && !opened) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, opened]);

  // Play the full video (with sound) when the modal opens; reset & pause on close.
  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (opened) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [opened]);

  return (
    <>
      <Box className={classes.card}>
        <Box className={classes.visual}>
          {project.video ? (
            <>
              <video
                ref={previewRef}
                className={classes.video}
                src={project.video}
                poster={project.poster}
                muted
                loop
                playsInline
                preload="metadata"
                tabIndex={-1}
              />
              <button
                type="button"
                className={classes.playOverlay}
                onClick={open}
                aria-label={`Watch ${project.title} demo`}
              >
                <span className={classes.playIcon}>
                  <IconPlayerPlayFilled size={22} />
                </span>
              </button>
            </>
          ) : (
            <Box
              className={classes.placeholder}
              style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
            >
              <Box className={classes.dot} style={{ background: project.color }} />
              <Text className={classes.initials} style={{ color: project.color }}>
                {project.title.slice(0, 2).toUpperCase()}
              </Text>
            </Box>
          )}
        </Box>

        <Box className={classes.body}>
          <Badge size="xs" variant="light" mb={6}>{project.category}</Badge>
          <Title order={4} className={classes.title}>{project.title}</Title>
          <Text size="sm" c="dimmed" className={classes.desc}>{project.description}</Text>

          <Group gap={6} wrap="wrap" className={classes.techRow}>
            {project.tech.map((t) => (
              <Badge key={t} size="xs" variant="outline" className={classes.techBadge}>{t}</Badge>
            ))}
          </Group>

          <Group grow gap="xs" className={classes.actions}>
            {project.video && (
              <Button
                size="xs"
                variant="light"
                leftSection={<IconPlayerPlayFilled size={14} />}
                onClick={open}
              >
                Watch demo
              </Button>
            )}
            <Button
              component="a"
              href={project.liveUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              rightSection={<IconExternalLink size={14} />}
              className={classes.visitBtn}
            >
              Visit link
            </Button>
          </Group>
        </Box>
      </Box>

      {project.video && (
        <Modal
          opened={opened}
          onClose={close}
          title={project.title}
          size={880}
          centered
          radius="md"
          fullScreen={isMobile}
          overlayProps={{ blur: 3, backgroundOpacity: 0.6 }}
          classNames={{ title: classes.modalTitle, content: classes.modalContent }}
        >
          <div className={classes.modalVideoWrap}>
            <video
              ref={modalVideoRef}
              className={classes.modalVideo}
              src={project.video}
              poster={project.poster}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </Modal>
      )}
    </>
  );
}
