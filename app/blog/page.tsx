import type { Metadata } from 'next';
import { Container, Box, Title, Text, SimpleGrid, Badge, Group } from '@mantine/core';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import classes from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Web development tips, SEO guides, and business growth strategies from the IdealCodes team.',
};

const posts = [
  {
    slug: 'why-your-business-needs-a-website',
    title: 'Why every Nigerian business needs a professional website in 2025',
    excerpt: 'Social media is rented land. Your website is the one digital asset you truly own. Here\'s why that distinction matters more than ever.',
    category: 'Business',
    readTime: '5 min read',
    date: 'Jan 2025',
    color: '#2563EB',
  },
  {
    slug: 'website-not-converting',
    title: '7 reasons your website isn\'t converting visitors into customers',
    excerpt: 'If people are visiting your site but not reaching out, the problem is rarely the product. Here\'s where most websites silently fail.',
    category: 'SEO & Growth',
    readTime: '7 min read',
    date: 'Jan 2025',
    color: '#22D3EE',
  },
  {
    slug: 'nextjs-vs-wordpress',
    title: 'Next.js vs WordPress: which is right for your business website?',
    excerpt: 'Both have their place. But the answer depends on what you\'re building, who\'s managing it, and how much you care about performance.',
    category: 'Tech',
    readTime: '6 min read',
    date: 'Feb 2025',
    color: '#7c3aed',
  },
];

export default function BlogPage() {
  return (
    <>
      <Box className={classes.hero}>
        <Container size="xl">
          <AnimatedSection>
            <Text size="xs" fw={600} className={classes.eyebrow}>IdealCodes Blog</Text>
            <Title order={1} className={classes.title}>Insights for growing businesses</Title>
            <Text size="xl" c="dimmed" className={classes.sub}>
              Web development, SEO, and digital strategy — written clearly, without the jargon.
            </Text>
          </AnimatedSection>
        </Container>
      </Box>

      <Box className={classes.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Box className={classes.card}>
                  <Box className={classes.cardTop} style={{ background: `${post.color}18` }}>
                    <Badge size="sm" style={{ background: `${post.color}22`, color: post.color, border: `1px solid ${post.color}33` }}>
                      {post.category}
                    </Badge>
                  </Box>
                  <Box className={classes.cardBody}>
                    <Title order={4} className={classes.postTitle} mb="sm">{post.title}</Title>
                    <Text size="sm" c="dimmed" className={classes.excerpt} mb="lg">{post.excerpt}</Text>
                    <Group justify="space-between">
                      <Text size="xs" c="dimmed">{post.date}</Text>
                      <Text size="xs" c="dimmed">{post.readTime}</Text>
                    </Group>
                  </Box>
                </Box>
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
