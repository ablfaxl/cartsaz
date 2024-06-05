import { Meta, StoryObj } from '@storybook/react'
import { Tag } from '@/app/_components/tag/tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
}
export default meta

type Story = StoryObj<typeof Tag>

export const Tags: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <Tag title="primary" variant="primary" />
      <Tag title="sucess" variant="success" />
      <Tag title="error" variant="error" />
      <Tag title="warning" variant="warning" />
    </div>
  ),
}

export const TagExample: Story = {
  render: () => <Tag title="آماده ارسال" variant="success" />,
}
