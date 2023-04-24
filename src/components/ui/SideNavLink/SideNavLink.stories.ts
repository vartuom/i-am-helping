import type {Meta, StoryObj} from '@storybook/react';
import SideNavLink from './SideNavLink';

const meta = {
    title: "SideNavLink",
    component: SideNavLink
} satisfies Meta<typeof SideNavLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Map: Story = {
    args: {
      path: '/map',
      type: 'map',
      visible: true
    },
};

export const Active: Story = {
  args: {
    path: '/active',
    type: 'active',
    visible: true
  },
};

export const Completed: Story = {
  args: {
    path: '/completed',
    type: 'completed',
    visible: true
  },
};

export const Approve: Story = {
  args: {
    path: '/approve',
    type: 'approve',
    visible: true
  },
};

export const Statistics: Story = {
  args: {
    path: '/statistics',
    type: 'statistics',
    visible: true
  },
};

export const Create: Story = {
  args: {
    path: '/create',
    type: 'create',
    visible: true
  },
};