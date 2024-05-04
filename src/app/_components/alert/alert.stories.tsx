import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@/app/_components/alert/alert'

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
}
export default meta

type Story = StoryObj<typeof Alert>

export const Alerts: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <Alert title="primary" variant="primary" />
      <Alert title="sucess" variant="success" />
      <Alert title="error" variant="error" />
      <Alert title="warning" variant="warning" />
    </div>
  ),
}

export const AlertExample: Story = {
  render: () => <Alert title="عملیات با موفقیت انجام شد" variant="success" />,
}
