import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RouteStopSelectorForm from './RouteStopSelectorForm'
import { stopsMock as data } from '../__mocks__/data/stopsDataMock'

const renderRouteStopSelectorForm = (props) => ({
  ...render(<RouteStopSelectorForm {...props} />),
})

describe('RouteSelectorForm', () => {
  test('submit button is disabled if no route option is selected', () => {
    renderRouteStopSelectorForm({ data })
    const button = screen.getByText(/Get Departure/)
    expect(button).toHaveClass('button--disabled')
  })

  test('submit button is enabled if a route option is selected', async () => {
    const routeOptionSelectedMock = data[0].description

    renderRouteStopSelectorForm({ data })
    userEvent.selectOptions(screen.getByRole('listbox'), routeOptionSelectedMock)
    const button = screen.getByText(/Get Departure/)
    expect(button).not.toHaveClass('button--disabled')
  })
  test('should show the correct data and should NOT be selected', () => {
    renderRouteStopSelectorForm({ data })
    data.forEach((stop) => {
      expect(screen.getByRole('option', { name: stop.description }).selected).toBe(false)
    })
  })
})
