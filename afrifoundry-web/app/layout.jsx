import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap', weight: ['400','600','700','800'] });
const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap', weight: ['400','500','600'] });

export const metadata = {
  title: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
  description: 'AfriFoundry is building the data and intelligence infrastructure Africa was never given. 500,000+ verified African market datapoints. One thinking partner that knows your market.',
  keywords: 'AfriFoundry, African AI, African market data, Kenya business intelligence, AfriFoundry AI, African entrepreneur, Mombasa startup, African data infrastructure',
  openGraph: {
    title: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
    description: '98% of the world\'s AI data was built without Africa. We\'re building the other 2%.',
    url: 'https://afrifoundry.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriFoundry — Data & Intelligence Infrastructure for Africa',
    description: '98% of the world\'s AI data was built without Africa. We\'re building the other 2%.',
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
