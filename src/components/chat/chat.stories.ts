import type { StoryObj, Meta} from '@storybook/react';
import Chat from "./chat";

const meta = {
    title: "Chat",
    component: Chat
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
            person_img: "https://cdn3.vectorstock.com/i/1000x1000/71/17/black-hair-bearded-business-man-circle-icon-vector-19277117.jpg",
            person_name: "Иванов Иван Иванович",
            phone: "+7(000) 000-00-00",
            messages: "Привет"
    },
};




