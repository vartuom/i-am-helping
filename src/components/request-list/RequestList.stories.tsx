import type { Meta, StoryObj } from '@storybook/react';

import { RequestList } from './RequestList';
import { user } from '../../data/user';

const meta: Meta<typeof RequestList> = {

    title: 'Список запросов',
    component: RequestList,
};

export default meta;
type Story = StoryObj<typeof RequestList>;

export const Primary: Story = {
    args:
        [{
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
        {
            id: 2,
            category: "категория",
            date: "24.10.2022",
            time: "16:00",
            address: "ул. Потолочного д. 9",
            title: "Заголовок",
            content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
            bulls: 3,
            user: user
        },
        {
            id: 3,
            category: "категория",
            date: "24.10.2022",
            time: "16:00",
            address: "ул. Потолочного д. 9",
            title: "Заголовок",
            content: "Описание заявки с возможностью развернуть и прочитать Описание заявки с возможностью развернуть и прочитать Описание заявки с  прочитать Описание заявки с ",
            bulls: 3,
            user: user
        },
        ]
};