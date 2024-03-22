// https://nuxt.com/docs/api/configuration/nuxt-config

import {css, alias, srcDir, dir} from './config/nuxt';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css,
  alias,
  srcDir,
  dir,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Vilga village'
    }
  }
})
