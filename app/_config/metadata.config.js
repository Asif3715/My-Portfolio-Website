/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://asif-khan-portfolio.vercel.app/'),
  title: {
    template: '%s | Asif Khan',
    default: 'Asif Khan • Data Science & AI Engineer',
  },
  description:
    'Data Science student at NUST with hands-on experience in machine learning, NLP, and data analytics. Building intelligent systems from research to deployment.',
  generator: 'Asif Khan',
  applicationName: 'Asif Khan',
  referrer: 'origin-when-cross-origin',
  keywords: ['Data Science', 'Machine Learning', 'AI', 'NLP', 'Deep Learning'],
  authors: [
    { name: 'Asif Khan', url: 'https://github.com/Asif3715' },
  ],
  creator: 'Asif Khan',
  publisher: 'Asif Khan',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asif Khan',
    description:
      'Data Science student at NUST with hands-on experience in machine learning, NLP, and data analytics.',
    images: {
      url: '/asif5.jpeg',
      alt: 'Asif Khan Portfolio',
    },
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
