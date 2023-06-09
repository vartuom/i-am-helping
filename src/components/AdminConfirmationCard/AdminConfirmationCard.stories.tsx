import type { Meta, StoryObj } from '@storybook/react';
import './AdminConfirmationCard.module.scss';
import AdminConfirmationCard from './AdminConfirmationCard';
import { user } from '../../data/user';

const meta: Meta<typeof AdminConfirmationCard> = {

    title: 'Cards/AdminConfirmationCard',
    component: AdminConfirmationCard,
    argTypes: {
      user,
      adminStatus: {
        type: 'string',
        defaultValue: 'main-admin',
        options: ['main-admin', 'admin'],
        control: {
          type: 'radio'
        }
      }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const admin: Story = {
    args:
      { user: user,
        adminStatus: 'main-admin'
      },
};

export const mainAdmin: Story = {
  args:
    { user: user,
      adminStatus: 'admin'
    },
};