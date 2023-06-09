import type { Meta, StoryObj } from '@storybook/react';
import './Request.scss';
import { Request } from './Request';
import { user } from '../../data/user';

const meta: Meta<typeof Request> = {

    title: 'Components/Request',
    component: Request,
};

export default meta;
type Story = StoryObj<typeof Request>;

export const Primary: Story = {
    args:
    {
        id: 1,
        category: "категория",
        date: "24.10.2022",
        time: "16:00",
        address: "ул. Потолочного д. 9",
        title: "Заголовок",
        content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
        bulls: 3,
        user: user
    },
};