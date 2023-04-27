import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const avatar: Story = {
  args: {
    size: 90,
    url: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg'
  },
};