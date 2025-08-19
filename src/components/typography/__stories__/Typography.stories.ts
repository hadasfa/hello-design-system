import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
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