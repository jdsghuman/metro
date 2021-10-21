import { render, screen } from '@testing-library/react'
import TransitTypeSelect from './TransitTypeSelect'

describe('TransitTypeSelect', () => {
  test('displays the header', () => {
    render(<TransitTypeSelect />)
    expect(screen.getByText('Realtime Departures')).toBeInTheDocument()
  })

  test('displays the default button using the primary color', () => {
    render(<TransitTypeSelect />)
    const buttonPrimary = screen.getByText('By route')
    expect(buttonPrimary).toHaveClass('button--primary')
  })

  test('displays the secondary button using the accent color', () => {
    render(<TransitTypeSelect />)
    const buttonPrimary = screen.getByText('By stop #')
    expect(buttonPrimary).toHaveClass('button--accent')
  })
})
