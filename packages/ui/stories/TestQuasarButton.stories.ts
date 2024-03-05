import type { Meta, StoryObj } from '@storybook/vue3';
import TestQuasarButton from '~/components/TestQuasarButton.vue';

const meta: Meta<typeof TestQuasarButton> = {
  component: TestQuasarButton
};

export default meta;
type Story = StoryObj<typeof TestQuasarButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { TestQuasarButton },
    setup() {
      return { args };
    },
    template: '<TestQuasarButton v-bind="args" />'
  }),
  args: {
    primary: true,
    label: 'Button'
  }
};
