import { Alert } from './alert'
import { render, screen } from '@testing-library/react'

describe('Alert component', () => {
  test('applies the correct css class for different alert variants', () => {
    const { rerender } = render(<Alert variant="success">content</Alert>)
    expect(screen.getByText(/content/)).toHaveClass('alert-success')
    rerender(<Alert variant="error">content</Alert>)
    expect(screen.getByText('content')).toHaveClass('alert-error')
  })
})
