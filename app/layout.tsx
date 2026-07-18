import type { Metadata } from 'next';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB/WhatsAppFAB';

export const metadata: Metadata = {
  title: {
    default: 'IdealCodes — Professional Website Development',
    template: '%s | IdealCodes',
  },
  description:
    'IdealCodes builds professional websites that grow businesses online. E-commerce, corporate, personal brand, real estate, portfolio, and more. Based in Lagos, serving clients worldwide.',
  keywords: [
    'web development Nigeria', 'website design Lagos', 'e-commerce website',
    'Next.js developer', 'professional website', 'IdealCodes',
  ],
  authors: [{ name: 'IdealCodes', url: 'https://idealcodes.tech' }],
  openGraph: {
    type: 'website',
    siteName: 'IdealCodes',
    title: 'IdealCodes — Professional Website Development',
    description: 'We build websites that grow businesses. Fast, responsive, and built to convert.',
    url: 'https://idealcodes.tech',
    images: [{ url: '/images/logo.jpeg', alt: 'IdealCodes logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IdealCodes — Professional Website Development',
    description: 'We build websites that grow businesses. Fast, responsive, and built to convert.',
    images: ['/images/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </Providers>
      </body>
    </html>
  );
}
