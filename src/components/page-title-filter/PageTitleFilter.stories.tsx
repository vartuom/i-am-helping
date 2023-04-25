import type { Meta, StoryObj } from '@storybook/react';
import './page-title-filter.scss';
import { PageTitleFilter } from './PageTitleFilter';
import { EPageTitleFilterKind } from './types'

const meta: Meta<typeof PageTitleFilter> = {

    title: 'Компонент под шапкой',
    component: PageTitleFilter,
};

export default meta;
type Story = StoryObj<typeof PageTitleFilter>;

export const Primary: Story = {
    args: EPageTitleFilterKind.Active

};