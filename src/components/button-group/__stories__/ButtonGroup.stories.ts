import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
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