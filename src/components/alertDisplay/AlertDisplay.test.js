import { render, screen } from '@testing-library/react'
import AlertDisplay from './AlertDisplay'
import { alertsMock as alerts } from '../__mocks__/data/alertsMock'

const renderAlertDisplay = (props) => ({
  ...render(<AlertDisplay {...props} />),
})
describe('AlertDisplay', () => {
  test('should display the heading', () => {
    renderAlertDisplay({ alerts })
    const heading = screen.getByTestId('alert-heading')
    expect(heading).toBeInTheDocument()
  })
  test('should display the correct amount of alerts', () => {
    renderAlertDisplay({ alerts })
    const alertsDisplayed = screen.getAllByText(/Mock alert/i)
    expect(alertsDisplayed.length).toBe(2)
  })
  test('should display the alert text', () => {
    const alertMatcher = {
      0: 'Mock alert A',
      1: 'Mock alert B',
    }
    renderAlertDisplay({ alerts })
    const alertsDisplayed = screen.getAllByText(/Mock alert/)
    alertsDisplayed.map((alert, i) => {
      expect(alert).toHaveTextContent(alertMatcher[i])
    })
  })
})
