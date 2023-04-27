import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./textArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
} as Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Recepient: Story = {
  args: {
    typeArea: "recipientCreateForm",
  },
};

export const Admin: Story = {
  args: {
    typeArea: "adminCreateForm",
  },
};

export const MobileCreateForm: Story = {
  args: {
    typeArea: "mobileCreateForm",
  },
};
