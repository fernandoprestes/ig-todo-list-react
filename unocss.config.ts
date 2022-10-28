import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import presetIcons from '@unocss/preset-icons';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  theme: {
    container: {
      center: true,
    },

    colors: {
      'gray': {
        100: '#f2f2f2',
        200: '#d9d9d9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1a1a1a',
        700: '#0d0d0d',
      },
      'purple': '#8284fa',
      'purple-dark': '#5e68ce',
      'blue': '#4ea8de',
      'blue-dark': '#1e6f9f',
      'danger': '#e25858',
    },
  },

  transformers: [transformerVariantGroup()],

  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Inter', 'sans'],
        mono: 'DM Mono',
        hand: ['Dancing Script', 'cursive'],
      },
    }),

    presetTypography(),
    presetIcons(),
    presetRemToPx(),
  ],
});
