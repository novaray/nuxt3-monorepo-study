import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

setup((app) => {
  // Registers your app's plugins into Storybook
  app.use(Quasar, {});
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
