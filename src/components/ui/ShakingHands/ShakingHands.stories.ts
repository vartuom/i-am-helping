import type {Meta, StoryObj} from '@storybook/react';
import ShakingHands from './ShakingHands';

const meta = {
    title: "ShakingHands",
    component: ShakingHands
} satisfies Meta<typeof ShakingHands>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};