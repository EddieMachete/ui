import type { StoryObj } from '@storybook/web-components';
import { EmCorna } from './EmCorna';

const meta = {
  title: 'SVG/EmCorna',
  tags: ['autodocs'],
  render: () => new EmCorna(),
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};
