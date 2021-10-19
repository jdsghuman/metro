import React, { useState } from 'react'
import { useRouter } from 'next/router'

const RouteSelectorForm = ({ routes }) => {
  const router = useRouter()
  const [routeNumber, setRouteNumber] = useState('')

  const handleRouteNumber = (event) => {
    setRouteNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`/route/${routeNumber}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Metro</h1>

      <label htmlFor="routes">Select a route:</label>

      <select onChange={handleRouteNumber} name="routes">
        <option value="">Select a route</option>
        {routes.map((route) => (
          <option key={route.route_id} value={route.route_id}>
            {route.route_label}
          </option>
        ))}
      </select>
      <input type="submit" value="submit" />
    </form>
  )
}

export default RouteSelectorForm
