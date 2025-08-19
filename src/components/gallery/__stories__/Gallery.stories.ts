import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from '../Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Components/Gallery',
  component: Gallery,
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