import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap', weight: ['400','600','700','800'] });
const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap', weight: ['400','500','600'] });

export const metadata = {
  metadataBase: new URL('https://afrifoundry.com'),
  title: {
    default: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
    template: '%s — AfriFoundry',
  },
  description: 'AfriFoundry builds the data and intelligence infrastructure Africa was never given. AfriFoundry AI is the thinking partner who knows Africa — built on 500,000+ verified datapoints from 42 countries, serving entrepreneurs, students, farmers, drivers and every mwananchi navigating a consequential decision.',
  keywords: [
    'AfriFoundry', 'African AI', 'African market data', 'Kenya business intelligence',
    'AfriFoundry AI', 'African entrepreneur', 'Mombasa startup', 'African data infrastructure',
    'Swahili AI', 'Kenya market prices', 'African thinking partner', 'ADA African dataset',
    'African dataset architecture', 'Gikomba prices', 'Kenya SME', 'African intelligence'
  ],
  authors: [{ name: 'Mark Gakuya', url: 'https://afrifoundry.com' }],
  creator: 'AfriFoundry',
  publisher: 'AfriFoundry',
  openGraph: {
    title: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
    description: 'Only 2% of global AI training data came from Africa. We\'re building the missing 98%. AfriFoundry AI is the thinking partner who knows Africa — built on 500,000+ verified African market datapoints.',
    url: 'https://afrifoundry.com',
    siteName: 'AfriFoundry',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
    description: 'Only 2% of global AI training data came from Africa. We\'re building the missing 98%. AfriFoundry AI is the thinking partner who knows Africa.',
    creator: '@AfriFoundry',
    site: '@AfriFoundry',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://afrifoundry.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable} ${jetbrains.variable}`}>
      <body style={{ fontFamily: 'var(--font-dm), sans-serif' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
