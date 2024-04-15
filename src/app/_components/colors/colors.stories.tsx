import { Meta, StoryObj } from '@storybook/react'
import { Colors } from './colors'

const meta: Meta<typeof Colors> = {
  component: Colors,
  tags: ['autodocs'],
  decorators: [
    (Story) => <Story />,
  ],
}

export default meta


type Story = StoryObj<typeof Colors>

export const BrandColors: Story = {
  render: () => (
    <>
      <Colors />
    </>
  ),
}