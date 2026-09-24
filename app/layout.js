import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata = {
  metadataBase: new URL("https://afrifoundry.com"),
  title: "AfriFoundry — Data & Intelligence Infrastructure for Africa",
  description:
    "AfriFoundry Limited — the data and intelligence infrastructure layer for Africa. Afri3B is the first product built on it.",
  openGraph: {
    title: "AfriFoundry — Data & Intelligence Infrastructure for Africa",
    description:
      "AfriFoundry builds the systems that turn real African data into AI infrastructure the continent doesn't yet have. Afri3B is the first product built on it.",
    images: ["/logo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AfriFoundry — Data & Intelligence Infrastructure for Africa",
    description: "Built from real African ground truth — Kenyan markets, real languages, honest by design.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AfriFoundry Limited",
  description: "Data and intelligence infrastructure for Africa, built from real African ground truth.",
  foundingDate: "2025-06-08",
  founder: { "@type": "Person", name: "Mark Gakuya" },
  address: { "@type": "PostalAddress", addressRegion: "Mombasa", addressCountry: "KE" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              var t = localStorage.getItem('afrifoundry-theme');
              if (t === 'light') document.documentElement.classList.remove('dark');
              if (t === 'light') document.documentElement.classList.add('light');
            } catch (e) {}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
