import type { Meta, StoryObj } from '@storybook/react';

import { RequestList } from './RequestList';

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
            person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
            person_name: "Петров Петр Петрович",
            phone: "+7(000) 000-00-00",
            is_approvable: true

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
            person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
            person_name: "Петров Петр Петрович",
            phone: "+7(000) 000-00-00",
            is_approvable: true

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
            person_img: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg",
            person_name: "Петров Петр Петрович",
            phone: "+7(000) 000-00-00",
            is_approvable: true

        },
        ]
};