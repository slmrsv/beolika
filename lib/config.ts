// src/lib/site-config.ts

export const SiteConfig = {
  metadataBase: new URL("https://beolika.com"),
  title: {
    default: 'Beolika',
    template: `Beolika - %s`,
  },
  description: 'FullStack Developer & 3D Designer',
  generator: 'NextJs',
  applicationName: 'Beolika',
  referrer: 'origin-when-cross-origin',
  authors: { name: 'Beolika', url: 'https://beolika.com' },
  creator: 'Beolika',
  publisher: 'Beolika',
} as const;
  