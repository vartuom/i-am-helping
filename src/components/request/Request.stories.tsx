import type { Meta, StoryObj } from '@storybook/react';
import './request.scss';
import { Request } from './Request';

const meta: Meta<typeof Request> = {

    title: 'Запрос',
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
        person_img: "https://i0.wp.com/studio.everypixel.com/ru/blog/wp-content/uploads/2013/10/How-to-make-a-portrait-photography-15.jpg?w=600&ssl=1",
        person_name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        is_approvable: true

    },
};