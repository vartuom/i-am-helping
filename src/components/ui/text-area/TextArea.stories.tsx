import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
} as Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Textarea: Story = {
  args: {},
};
