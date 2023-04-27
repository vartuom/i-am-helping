import type {Meta, StoryObj} from '@storybook/react';
import Radio from "./radio";

const meta = {
    title: "Radio",
    component: Radio
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        label: "ААаа",
    },
};