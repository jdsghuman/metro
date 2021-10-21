import { useEffect, useState } from 'react'

export default function useTransitDisplay(departures) {
  const [stopsToShow, setStopsToShow] = useState([])
  const [toggleShowAllRoutes, setToggleShowAllRoutes] = useState(false)

  const getMoreStops = () => {
    setToggleShowAllRoutes(!toggleShowAllRoutes)
  }

  useEffect(() => {
    toggleShowAllRoutes
      ? setStopsToShow([...stopsToShow, ...departures.slice(stopsToShow.length, departures.length)])
      : setStopsToShow(departures.slice(0, 3))
  }, [toggleShowAllRoutes])

  useEffect(() => {
    setStopsToShow(departures.slice(0, 3))
  }, [])

  return { stopsToShow, getMoreStops, toggleShowAllRoutes }
}
