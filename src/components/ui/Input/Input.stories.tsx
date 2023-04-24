import type {Meta, StoryObj} from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
    component: Input
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Name: Story = {
    args:
    {
      typeInput:'name'
    }
};

export const Phone: Story = {
  args:
  {
    typeInput:'number'
  }
};