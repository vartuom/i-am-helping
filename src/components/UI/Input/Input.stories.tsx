import type {Meta, StoryObj} from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
    component: Input
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Name: Story = {
    args:
    {
      typeInput:'name'
    }
};

export const Phone: Story = {
  args:
  {
    typeInput:'number'
  }
};

export const Adress: Story = {
  args:
  {
    typeInput:'adress'
  }
};

export const Admin_Name: Story = {
  args:
  {
    typeInput:'adminName'
  }
};

export const User_Info: Story = {
  args:
  {
    typeInput:'userInfoName'
  }
};

export const User_Phone: Story = {
  args:
  {
    typeInput:'userInfoPhone'
  }
};