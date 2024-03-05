// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui'],
  alias: { '~ui': resolve('./') },
  components: [{ path: '~ui/components', prefix: 'Ui' }]
});
