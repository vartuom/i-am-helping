import type { Meta, StoryObj } from '@storybook/react';
import './userCard.module.scss';
import userCard from './userCard';

const meta: Meta<typeof userCard> = {

    title: 'Карточка пользователя',
    component: userCard,
};

export default meta;
type Story = StoryObj<typeof Request>;