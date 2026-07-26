'use client';
import { useState, useEffect } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import classes from './BackToTop.module.css';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show once the user has scrolled a couple of sections down.
    const handler = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Tooltip label="Back to top" position="left">
      <ActionIcon
        onClick={scrollToTop}
        variant="default"
        size="xl"
        radius="xl"
        aria-label="Back to top"
        className={`${classes.fab} ${visible ? classes.visible : ''}`}
      >
        <IconArrowUp size={24} />
      </ActionIcon>
    </Tooltip>
  );
}
