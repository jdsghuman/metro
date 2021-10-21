import { render, screen, fireEvent } from '@testing-library/react'
import DepartureDisplay from './DepartureDisplay'
import departureDataDefaultMock from '../__mocks__/data/departureDataDefaultMock'
import departureDataAlertsMock from '../__mocks__/data/departureDataAlertsMock'

const alertText =
  'Green Line, Blue Line and Blue Line Shuttle service advisory: Platform announcements are not functional at this time'

const renderDepartureDisplay = (props) => ({
  ...render(<DepartureDisplay {...props} />),
})
describe('DepartureDisplay', () => {
  test('should display 3 departures by default', () => {
    const data = { ...departureDataDefaultMock }
    renderDepartureDisplay({ data })
    const listSize = screen.getAllByTestId('departure-list')
    expect(listSize).toHaveLength(3)
  })

  test('should display all departures when the Show more button is clicked', () => {
    const data = { ...departureDataDefaultMock }
    renderDepartureDisplay({ data })
    const getAllDepartures = screen.getByText('Show more')
    fireEvent.click(getAllDepartures)
    const allDeparturesList = screen.getAllByTestId('departure-list')
    expect(allDeparturesList).toHaveLength(6)
  })

  test('should display 3 departures when the Show more button is toggled', () => {
    const data = { ...departureDataDefaultMock }
    renderDepartureDisplay({ data })
    const getAllDepartures = screen.getByText('Show more')
    fireEvent.click(getAllDepartures)
    fireEvent.click(getAllDepartures)
    const allDeparturesList = screen.getAllByTestId('departure-list')
    expect(allDeparturesList).toHaveLength(3)
  })

  test('should not display an alert if there are none recieved', () => {
    const data = { ...departureDataDefaultMock }
    renderDepartureDisplay({ data })
    const alertTitle = screen.queryByText(/Route alerts/)
    expect(alertTitle).not.toBeInTheDocument()
    expect(screen.queryByText(alertText)).not.toBeInTheDocument()
  })

  test('should display alerts when received from data', () => {
    const data = { ...departureDataAlertsMock }
    renderDepartureDisplay({ data })
    const alertTitle = screen.getByText(/Route alerts/)
    expect(alertTitle).toBeInTheDocument()
    expect(screen.getByText(alertText)).toBeInTheDocument()
  })
})
