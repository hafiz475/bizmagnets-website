import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BizMagnets | WhatsApp-First Business Operations Platform',
  description:
    'Turn WhatsApp chats into trackable work with owners, deadlines, SLAs, automated ticketing, scheduling, field operations, and CRM integrations.',
  keywords: [
    'WhatsApp Business Automation',
    'WhatsApp CRM',
    'WhatsApp Ticketing System',
    'Conversational Operations',
    'WhatsApp Workflow Engine',
    'Field Operations Software',
    'WhatsApp Service Desk',
  ],
  authors: [{ name: 'BizMagnets Team' }],
  creator: 'BizMagnets',
  publisher: 'BizMagnets',
  metadataBase: new URL('https://bizmagnets.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BizMagnets | WhatsApp-First Business Operations Platform',
    description:
      'WhatsApp is where work starts. Make sure it gets finished. Turn chats into trackable workflows with SLA enforcement.',
    url: 'https://bizmagnets.ai',
    siteName: 'BizMagnets',
    images: [
      {
        url: '/assets/logo-lockup.png',
        width: 1200,
        height: 630,
        alt: 'BizMagnets WhatsApp Operations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizMagnets | WhatsApp-First Business Operations',
    description:
      'Turn every WhatsApp chat into trackable work — with an owner, deadline, and receipt.',
    images: ['/assets/logo-lockup.png'],
    creator: '@bizmagnets',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BizMagnets',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    description:
      'WhatsApp-First Business Operations Platform for ticketing, workflow automation, appointment scheduling, and CRM synchronization.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bm-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased selection:bg-blue-500/20 selection:text-[#111C34] dark:selection:text-[#EDF1FA]" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
