import { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./chart";

const meta: Meta<typeof Chart> = {
  title: "Chart",
  component: Chart,
};
export default meta;

type Story = StoryObj<typeof Chart>;

export const First: Story = {
  args: {
    data: [
      {
        date: new Date("12.07.2022"),
        views: 2342,
        visits: 3122,
        bids: 232,
      },
      {
        date: new Date("12.08.2022"),
        views: 1000,
        visits: 3234,
        bids: 2234,
      },
      {
        date: new Date("12.09.2022"),
        views: 2000,
        visits: 32,
        bids: 2,
      },
      {
        date: new Date("12.10.2022"),
        views: 4120,
        visits: 345,
        bids: 2,
      },
      {
        date: new Date("12.11.2022"),
        views: 8870,
        visits: 3345,
        bids: 2,
      },
      {
        date: new Date("12.12.2022"),
        views: 16000,
        visits: 32,
        bids: 342,
      },
      {
        date: new Date("12.13.2022"),
        views: 32500,
        visits: 39802,
        bids: 22,
      },
      {
        date: new Date("12.14.2022"),
        views: 7000,
        visits: 312,
        bids: 342,
      },
    ],
  },
};

