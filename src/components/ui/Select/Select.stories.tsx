import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Select, { type IOption } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<typeof Select>

export default meta;
type Story = StoryObj<typeof meta>;

const options: IOption[] = [
  {
    label: 'Audi',
    value: 'audi'
  },
  {
    label: 'Ferrari',
    value: 'ferrari'
  },
  {
    label: 'Mercedes Benz',
    value: 'mercedes'
  },
  {
    label: 'BMW',
    value: 'bmw'
  },
  {
    label: 'Tesla',
    value: 'tesla'
  }
]

export const Custom: Story = {
  args: {
    defaultValue: 'Выберите тип задачи',
    options
  },
};
