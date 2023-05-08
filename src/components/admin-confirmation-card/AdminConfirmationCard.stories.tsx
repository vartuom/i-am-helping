import type { Meta, StoryObj } from '@storybook/react';
import './AdminConfirmationCard.module.scss';
import AdminConfirmationCard from './AdminConfirmationCard';
import { user } from '../../data/user';

const meta: Meta<typeof AdminConfirmationCard> = {

    title: 'Карточка подтверждения админа',
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

export const Admin: Story = {
    args:
      { user: user,
        adminStatus: 'main-admin'
      },
};

export const MainAdmin: Story = {
  args:
    { user: user,
      adminStatus: 'admin'
    },
};