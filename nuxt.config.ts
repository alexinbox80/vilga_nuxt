// https://nuxt.com/docs/api/configuration/nuxt-config

import {css, alias, srcDir, dir} from './config/nuxt';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css,
  alias,
  srcDir,
  dir,
  ssr: true,
})
