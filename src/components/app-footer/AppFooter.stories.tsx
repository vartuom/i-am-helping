import type { Meta, StoryObj } from '@storybook/react';
import { AppFooter } from './AppFooter';


const meta: Meta<typeof AppFooter> = {
  component: AppFooter,
};

export default meta;

type Story = StoryObj<typeof AppFooter>;

export const footer: Story = {};