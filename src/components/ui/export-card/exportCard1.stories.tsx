import { Meta, StoryObj } from "@storybook/react";
import { ExportCard } from "./exportCard1";
import { Button } from "../buttons/Button";

const meta: Meta<typeof ExportCard> = {
  title: "Карточка для экспорта",
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
