import type { Meta, StoryObj } from '@storybook/react';
import './user-confirmation-card.module.scss';
import userConfirmationCard from './user-confirmation-card';
import Avatar from '../../images/avatar-admin-small.png';

const meta: Meta<typeof userConfirmationCard> = {

    title: 'Карточка подтверждения пользователя',
    component: userConfirmationCard,
    argTypes: {
        status: {
            type: 'string',
            defaultValue: 'admin',
            options: ['admin', 'volunteer', 'recipient'],
            control: {
                type: 'radio'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof userConfirmationCard>;

export const Primary: Story = {
    args:
    {
        id: 11111114,
        name: 'Петров Петр Петрович',
        phone: '+7(000)000-00-04',
        image: `${Avatar}`,
        balls: 2500,
        keys: 1,
        finishedApplications: 150,
        status: 'admin',
    },
};