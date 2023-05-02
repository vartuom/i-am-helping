import type {Meta, StoryObj} from '@storybook/react';
import Checkbox from "./checkbox";

const meta = {
    title: "Checkbox",
    component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        name: "checkboxName",
        label: "Подпись к чекбоксу",
    },
};