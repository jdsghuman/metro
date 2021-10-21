import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

const renderButton = (props) => {
  const BUTTON_TEXT = 'BUTTON_TEXT'
  return {
    ...render(
      <Button type="button" {...props}>
        BUTTON_TEXT
      </Button>
    ),
    BUTTON_TEXT,
  }
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('Button', () => {
  test('is findable by its text', () => {
    const { BUTTON_TEXT } = renderButton()
    expect(screen.queryByText(BUTTON_TEXT)).not.toBeNull()
  })

  test('fires the provided onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { BUTTON_TEXT } = renderButton({ onClick })
    const button = screen.queryByText(BUTTON_TEXT)
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
