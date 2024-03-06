import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { imageminPlugin } from './plugins/imageminPlugin';
import { VitePWA } from 'vite-plugin-pwa';
import rollupPluginImage from '@rollup/plugin-image';

export default defineConfig({
  plugins: [
    createVuePlugin(),
    imageminPlugin(),
    VitePWA(),
    rollupPluginImage({
      include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.webp'],
      exclude: 'node_modules/**',
      dom:true,
    }),
  ],
});