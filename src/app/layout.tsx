import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';
import MagneticCursor from '@/components/MagneticCursor';
import PageTransition from '@/components/PageTransition';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Ahamedh Farajeen - Software Engineer',
  description:
    'Full-stack developer and software engineering student at SLIIT. Building practical applications from e-commerce platforms to learning management systems.',
  openGraph: {
    title: 'Ahamedh Farajeen - Software Engineer',
    description:
      'Full-stack developer and software engineering student at SLIIT.',
    type: 'website',
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerif.variable}`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <MagneticCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
