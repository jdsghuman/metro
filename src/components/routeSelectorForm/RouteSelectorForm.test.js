import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RouteSelectorForm from './RouteSelectorForm'
import { routesDataMock as routes } from '../__mocks__/data/routeDataMock'

const renderRouteSelectorForm = (props) => ({
  ...render(<RouteSelectorForm {...props} />),
})

describe('RouteSelectorForm', () => {
  test('submit button is disabled if no route option is selected', () => {
    renderRouteSelectorForm({ routes })
    const button = screen.getByText(/Select Route/)
    expect(button).toHaveClass('button--disabled')
  })

  test('submit button is enabled if a route option is selected', async () => {
    const routeOptionSelectedMock = routes[0].route_label

    renderRouteSelectorForm({ routes })
    userEvent.selectOptions(screen.getByRole('listbox'), routeOptionSelectedMock)
    const button = screen.getByText(/Select Route/)
    expect(button).not.toHaveClass('button--disabled')
  })
  test('should show the correct data and should NOT be selected', () => {
    renderRouteSelectorForm({ routes })
    routes.forEach((route) => {
      expect(screen.getByRole('option', { name: route.route_label }).selected).toBe(false)
    })
  })
})
