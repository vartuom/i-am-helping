import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { EmptyMessageIcon, LocationOnMapIcon, PhoneIcon, AddIcon, CrossIcon, EditIcon, ArrowIconBig } from '../icons/icons';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhoneButton: Story = {
  args: {
    variant: "icon",
    size: "small",
    color: "dark",
    type: "button",
    hasBorder: true,
    icon: <PhoneIcon type="white" />
  }
}

export const MessageButton: Story = {
  args: {
    variant: "icon",
    size: "small",
    color: "dark",
    type: "button",
    hasBorder: true,
    icon: <EmptyMessageIcon type="white" />
  }
}

export const LocationButtonBig: Story = {
  args: {
    variant: "icon",
    size: "medium",
    color: "dark",
    type: "button",
    icon: <LocationOnMapIcon />,
  },
};

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

export const AddButton: Story = {
  args: {
    variant: "icon",
    size: "large",
    color: "dark",
    type: "button",
    icon: <AddIcon />,
  },
};

export const AddButtonSmaller: Story = {
  args: {
    variant: "icon",
    size: "extra-medium",
    color: "dark",
    type: "button",
    icon: <AddIcon />,
  },
};

export const CloseButton: Story = {
  args: {
    figure: "close",
    type: "button",
    icon: <CrossIcon />,
  },
};

export const EditButton: Story = {
  args: {
    figure: "edit",
    type: "button",
    icon: <EditIcon />,
  },
};

export const SearchButton: Story = {
  args: {
    figure: "search",
    type: "button",
    icon: <ArrowIconBig type="white"/>,
    label: "Пoиск"
  },
};

export const ExcelButton: Story = {
  args: {
    animated: "excel",
    type: "button"
  },
};

export const SettingButton: Story = {
  args: {
    animated: "wheel",
    type: "button"
  }
}
