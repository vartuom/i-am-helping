import type { Meta, StoryObj } from '@storybook/react';
import './user-confirmation-card.module.scss';
import userConfirmationCard from './user-confirmation-card';
import Avatar from '../../images/avatar-admin-small.png';


const meta: Meta<typeof userConfirmationCard> = {

    title: 'Карточка подтверждения пользователя',
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
      { user: 
        {
          id: 11111114,
          name: 'Петров Петр Петрович',
          phone: '+7(000)000-00-04',
          image: `${Avatar}`,
          balls: 2500,
          keys: 1,
          finishedApplications: 150,
          //status: 'admin',
          confirmation: 'green'
        },
        displayType: 'desktop'
      },
};

export const Mobile: Story = {
  args:
    { user: 
      {
        id: 11111114,
        name: 'Петров Петр Петрович',
        phone: '+7(000)000-00-04',
        image: `${Avatar}`,
        balls: 0,
        keys: 0,
        finishedApplications: 0,
        //status: 'admin',
        confirmation: 'orange'
      },
      displayType: 'mobile'
    },
};
