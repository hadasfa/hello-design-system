import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
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