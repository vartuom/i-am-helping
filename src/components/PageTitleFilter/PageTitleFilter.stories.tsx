import type { Meta, StoryObj } from '@storybook/react';
import './PageTitleFilter.scss';
import { PageTitleFilter } from './PageTitleFilter';
import { EPageTitleFilterKind } from './types'

const meta: Meta<typeof PageTitleFilter> = {

    title: 'Components/PageTitleFilter',
    component: PageTitleFilter,
};

export default meta;
type Story = StoryObj<typeof PageTitleFilter>;

export const Primary: Story = {
    args: { item: EPageTitleFilterKind.Active },
    parameters: {
        actions: { argTypesRegex: '^on.*' },
      },

};