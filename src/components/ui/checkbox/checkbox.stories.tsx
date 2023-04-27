import type {Meta, StoryObj} from '@storybook/react';
import Checkbox from './checkbox';
import {FormProvider, useForm} from "react-hook-form";

const meta = {
    title: "Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => (
            <FormProvider {...useForm()}>
                <Story />
            </FormProvider>
        )
    ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        label: "Подпись к чекбоксу",
    },
};