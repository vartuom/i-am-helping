import type { Meta, StoryObj } from "@storybook/react";
import FormsHeader from "./formsHeader";

const meta = {
  title: "Components/FormsHeader",
  component: FormsHeader,
} as Meta<typeof FormsHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    avatar:
      "https://yt3.ggpht.com/a/AGF-l79GtpUANlkK4DUF5AZxkTXbF4bZtqo20ASMyA=s900-c-k-c0xffffffff-no-rj-mo",
    name: "Иванов Иван Иванович",
    phone: "+7(000) 000-00-00",
  },
};
