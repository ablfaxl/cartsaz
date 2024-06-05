import { Tag } from './tag'
import { render, screen } from '@testing-library/react'

describe('Tag component', () => {
  test('applies the correct css class for different tag variants', () => {
    const { rerender } = render(<Tag variant="success">content</Tag>)
    expect(screen.getByText(/content/)).toHaveClass('tag-success')
    rerender(<Tag variant="error">content</Tag>)
    expect(screen.getByText('content')).toHaveClass('tag-error')
  })
})
