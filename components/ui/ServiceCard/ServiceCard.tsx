import { Box, Text, Title, Badge, List, ListItem } from '@mantine/core';
import {
  IconShoppingCart, IconUser, IconBuilding, IconHome,
  IconBriefcase, IconFileText, IconSearch, IconTrendingUp,
} from '@tabler/icons-react';
import { Service } from '@/lib/types';
import classes from './ServiceCard.module.css';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart: IconShoppingCart,
  User: IconUser,
  Building: IconBuilding,
  Home: IconHome,
  Briefcase: IconBriefcase,
  FileText: IconFileText,
  Search: IconSearch,
  TrendingUp: IconTrendingUp,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? IconBuilding;

  return (
    <Box className={`${classes.card} ${service.highlight ? classes.highlight : ''}`}>
      {service.highlight && (
        <Badge size="xs" className={classes.badge} mb="sm">Most Requested</Badge>
      )}
      <Box className={classes.iconWrap}>
        <Icon size={22} stroke={1.5} />
      </Box>
      <Title order={4} className={classes.title}>{service.title}</Title>
      <Text size="sm" c="dimmed" className={classes.desc}>{service.description}</Text>
      <List size="xs" className={classes.features} spacing={4}>
        {service.features.map((f) => (
          <ListItem key={f} className={classes.feature}>{f}</ListItem>
        ))}
      </List>
    </Box>
  );
}
