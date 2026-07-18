'use client';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import classes from './WhatsAppFAB.module.css';

export function WhatsAppFAB() {
  return (
    <Tooltip label="Chat on WhatsApp" position="left">
      <ActionIcon
        component="a"
        href="https://wa.me/2349021848847?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20website%20project"
        target="_blank"
        rel="noopener noreferrer"
        size="xl"
        radius="xl"
        className={classes.fab}
        aria-label="Chat on WhatsApp"
      >
        <IconBrandWhatsapp size={28} />
      </ActionIcon>
    </Tooltip>
  );
}
