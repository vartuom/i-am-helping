import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { EditIcon, LocationOnMapIcon, PhoneIcon } from '../icons/icons';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

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

export const LocationButtonBig: Story = {
  args: {
    variant: "icon",
    size: "medium",
    color: "dark",
    type: "button",
    icon: <LocationOnMapIcon />,
  },
};

export const AddButton: Story = {
  args: {
    variant: "icon",
    size: "medium",
    color: "dark",
    type: "button",
    icon: <LocationOnMapIcon />,
  },
};
