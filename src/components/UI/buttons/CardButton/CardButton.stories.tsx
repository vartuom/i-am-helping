import type { Meta, StoryObj } from '@storybook/react';
import { CardButton } from './CardButton';
import { AcceptBlockIcon, ActiveApplicationIcon, ApplicationMapIcon, CompletedApplicationIcon, CreateEditIcon, StatisticsIcon } from '../../Icons/Icons';

const meta = {
    title: 'Components/CardButton',
    component: CardButton,
    tags: ['autodocs'],
} satisfies Meta<typeof CardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveApplicationButton: Story = {
    args: {
        icon: <ActiveApplicationIcon type="white" />,
        display: "web",
        children: "Активные заявки",
        isVolunteer: true
    }
}

export const ApplicationMapButton: Story = {
    args: {
        icon: <ApplicationMapIcon type="white" />,
        display: "web",
        children: "Карта заявок",
        isVolunteer: true
    }
}

export const CompletedApplicationButton: Story = {
    args: {
        icon: <CompletedApplicationIcon type="white" />,
        display: "web",
        children: "Завершенные заявки",
        isVolunteer: true
    }
}

export const AcceptAndBlockButton: Story = {
    args: {
        icon: <AcceptBlockIcon type="white" />,
        display: "web",
        children: "Подтверждение / Блокировка"
    }
}

export const StatisticsButton: Story = {
    args: {
        icon: <StatisticsIcon type="white" />,
        display: "web",
        children: "Статистика"
    }
}

export const CreateAndEditApplicationButton: Story = {
    args: {
        icon: <CreateEditIcon type="white" />,
        display: "web",
        children: "Создание / Редактирование заявки"
    }
}

