import type { Meta, StoryObj } from "@storybook/react";
import Clock from "./Clock";

const meta = {
  title: "Components/Clock",
  component: Clock,
} as Meta<typeof Clock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const name: Story = {
  args: {
    hour: 23,
    minut: 59,
  },
};
