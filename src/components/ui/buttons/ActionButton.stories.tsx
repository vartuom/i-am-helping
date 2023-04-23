import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';
import { EditIcon, PhoneIcon } from '../icons/icons';

const meta = {
  title: 'Buttons/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;


export const TextButtonDark: Story = {
  args: {
    variant: "text",
    color: "dark",
    label: "Применить",
    type: "submit"
  },
};

export const TextButtonLight: Story = {
  args: {
    variant: "text",
    color: "light",
    label: "Заблокировать",
    type: "button"
  },
};

export const IconButton: Story = {
  args: {
    variant: "icon",
    size: "small",
    color: "dark",
    type: "button",
    icon: <EditIcon />,
  },
};
