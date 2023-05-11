import type { Meta, StoryObj } from '@storybook/react';
import './userCard.module.scss';
import userCard from './userCard1';

const meta: Meta<typeof userCard> = {

    title: 'Карточка пользователя',
    component: userCard,
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
type Story = StoryObj<typeof userCard>;

export const Primary: Story = {
    args:
    {
        id: 112233,
        name: 'Иванов Иван Иванович',
        phone: '+7(000)000-00-00',
        about: 'Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек Я люблю музыку, книги и кошек',
        balls: 2500,
        keys: 1,
        finishedApplications: 150,
        status: 'admin',
        avatar: 'https://fraguru.com/mdimg/avatariru/m.298472.jpg'
    },
}; 