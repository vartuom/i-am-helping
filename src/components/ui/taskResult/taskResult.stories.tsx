import type { Meta, StoryObj } from "@storybook/react";
import TaskResult from "./taskResult";

const meta = {
  title: "Components/TaskResult",
  component: TaskResult,
} as Meta<typeof TaskResult>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Result: Story = {
  args: {
    date: "24.09.2022",
    time: "16:00",
    adress: "ул. Нахимова, д.9, у подъезда №3",
    category: "категория",
    taskName: "Выгулять собаку",
    taskText:
      "Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!",
  },
};
