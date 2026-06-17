// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],

  // Single typeface across the whole site: JetBrains Mono. Inter was
  // removed — there is no sans body font anymore. Italic is included so
  // typographic hierarchy can use *italic* without a family swap. The
  // fallback chain uses generic monospace so fallback metrics stay close
  // and avoid layout shift before the self-hosted face loads.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
