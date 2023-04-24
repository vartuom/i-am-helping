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
            person_name: "Иванов Иван Иванович",
            phone: "+7(000) 000-00-00",
            photo: "fotoVolonter",
            messages: "Привет"
    },
};




