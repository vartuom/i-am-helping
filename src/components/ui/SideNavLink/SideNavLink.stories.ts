
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
      type: 'map',
      visible: true
    },
};

export const Active: Story = {
  args: {
    type: 'active',
    visible: true
  },
};

export const Completed: Story = {
  args: {
    type: 'completed',
    visible: true
  },
};

export const Approve: Story = {
  args: {
    type: 'approve',
    visible: true
  },
};

export const Statistics: Story = {
  args: {
    type: 'statistics',
    visible: true
  },
};

export const Create: Story = {
  args: {
    type: 'create',
    visible: true
  },
};

export const Contacts: Story = {
  args: {
    type: 'contacts',
    visible: true
  },
};

export const Message: Story = {
  args: {
    type: 'message',
    visible: true
  },
};