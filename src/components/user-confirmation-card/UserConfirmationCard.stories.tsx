import type { Meta, StoryObj } from '@storybook/react';
import './UserConfirmationCard.module.scss';
import userConfirmationCard from './UserConfirmationCard';
import { user } from '../../data/user';

const meta: Meta<typeof userConfirmationCard> = {

    title: 'Cards/UserConfirmationCard',
    component: userConfirmationCard,
    argTypes: {
      user: {
        confirmation: {
          type: 'string',
          defaultValue: 'green',
          options: ['green', 'orange', 'grey'],
          control: {
              type: 'radio'
          }
        }
      },
      displayType: {
        type: 'string',
        defaultValue: 'desktop',
        options: ['desktop', 'mobile'],
        control: {
          type: 'radio'
        }
      }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
    args:
      { user: user,
        displayType: 'desktop'
      },
};

export const Mobile: Story = {
  args:
    { user: user,
      displayType: 'mobile'
    },
};
