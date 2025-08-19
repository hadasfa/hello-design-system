import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Template1: Story = {};

export const Template2: Story = {};

export const Template3: Story = {};