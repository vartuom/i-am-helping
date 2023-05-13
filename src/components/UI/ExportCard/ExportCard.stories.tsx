import { Meta, StoryObj } from "@storybook/react";
import { ExportCard } from "./ExportCard";
import { Button } from "../Buttons/Button";

const meta: Meta<typeof ExportCard> = {
  title: "Cards/ExportCard",
  component: ExportCard,
};
export default meta;

type Story = StoryObj<typeof ExportCard>;

const button = <Button animated="excel" onClick={() => {}} type="button" />;

export const First: Story = {
  args: {
    button,
  },
};
