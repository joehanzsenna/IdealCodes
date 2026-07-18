import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

const brandBlue: MantineColorsTuple = [
  '#eff6ff','#dbeafe','#bfdbfe','#93c5fd','#60a5fa',
  '#3b82f6','#2563EB','#1d4ed8','#1e40af','#1e3a8a',
];

const brandCyan: MantineColorsTuple = [
  '#ecfeff','#cffafe','#a5f3fc','#67e8f9','#22d3ee',
  '#06b6d4','#0891b2','#0e7490','#155e75','#164e63',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: { brand: brandBlue, cyan: brandCyan },
  fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: "'JetBrains Mono', 'Fira Code', monospace",
  headings: {
    fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(56), lineHeight: '1.1' },
      h2: { fontSize: rem(40), lineHeight: '1.2' },
      h3: { fontSize: rem(28), lineHeight: '1.3' },
      h4: { fontSize: rem(20), lineHeight: '1.4' },
    },
  },
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: { size: 'md' },
      styles: { root: { fontWeight: 600 } },
    },
    Container: { defaultProps: { size: 'xl' } },
  },
});
