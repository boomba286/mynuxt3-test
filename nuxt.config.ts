import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'

// export default defineConfig({
//   plugins: [
//     Vue(), 
//     VueTypeImports(),
//   ],
// })

import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  buildModules: [
    'vite-plugin-vue-type-imports/nuxt',
  ],
  vite: {
    plugins: [
      // Vue(), 
      VueTypeImports(),
    ]
  }
});
