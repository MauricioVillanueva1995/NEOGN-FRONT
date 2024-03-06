import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { imageminPlugin } from './plugins/imageminPlugin';
import { VitePWA } from 'vite-plugin-pwa';
import image from '@rollup/plugin-image';

export default defineConfig({
  plugins: [
    createVuePlugin(),
    imageminPlugin(),
    VitePWA(),
    image({
      include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.webp'],
      exclude: 'node_modules/**',
      dom:true,
    }),
  ],
});