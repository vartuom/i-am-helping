import type {Meta, StoryObj} from '@storybook/react';
import RadioGroup from "./radioGroup";

const meta = {
    title: "Radio",
    component: RadioGroup
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        name: "range",
        values: [
            { value: "1km", label: "1 км"},
            { value: "3km", label: "3 км"},
            { value: "5km", label: "5 км"},
        ]
    },
};