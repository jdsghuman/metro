import { render, screen, fireEvent } from '@testing-library/react'
import StopInputSelector from './StopInputSelector'

afterEach(() => {
  jest.clearAllMocks()
})

describe('StopInputSelector', () => {
  test('should show the submit button disabled as default', () => {
    render(<StopInputSelector />)
    const button = screen.getByText('Get Stops')
    expect(button).toHaveClass('button--disabled')
  })

  test('should show the submit button as enabled if a route number is entered', () => {
    render(<StopInputSelector />)
    const inputElement = screen.getByPlaceholderText(/Enter stop number/)
    fireEvent.change(inputElement, { target: { value: 724 } })
    const button = screen.getByText('Get Stops')
    expect(button).not.toHaveClass('button--disabled')
  })
})
