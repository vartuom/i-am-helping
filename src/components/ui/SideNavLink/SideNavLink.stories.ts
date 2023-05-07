import type {Meta, StoryObj} from '@storybook/react';
import SideNavLink from './SideNavLink';
import { EPageTitleFilterKind } from '../../page-title-filter/types';

const meta = {
    title: "SideNavLink",
    component: SideNavLink
} satisfies Meta<typeof SideNavLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Map: Story = {
    args: {
      path: '/map',
      type: EPageTitleFilterKind.Map,
      visible: true,
      active: false
    },
};

export const Active: Story = {
  args: {
    path: '/active',
    type: EPageTitleFilterKind.Active,
    visible: true,
    active: false
  },
};

export const Completed: Story = {
  args: {
    path: '/completed',
    type: EPageTitleFilterKind.Completed,
    visible: true,
    active: false
  },
};

export const Approve: Story = {
  args: {
    path: '/approve',
    type:EPageTitleFilterKind.Acceptation,
    visible: true,
    active: false
  },
};

export const Statistics: Story = {
  args: {
    path: '/statistics',
    type: EPageTitleFilterKind.Statistics,
    visible: true,
    active: false
  },
};

export const Create: Story = {
  args: {
    path: '/create',
    type: EPageTitleFilterKind.CreateEdit,
    visible: true,
    active: false
  },
};

