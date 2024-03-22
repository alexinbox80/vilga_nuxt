// https://nuxt.com/docs/api/configuration/nuxt-config

import {srcDir, dir} from './config/nuxt';
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir,
  dir
})
