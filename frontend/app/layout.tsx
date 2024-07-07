// app/layout.tsx
import { Montserrat, Poppins } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants';
import type { Metadata } from 'next';
import './global.css';
import ClientProviders from './provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} bg-primary-dark font-poppins scroll-smooth flex flex-col md:flex-row`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
