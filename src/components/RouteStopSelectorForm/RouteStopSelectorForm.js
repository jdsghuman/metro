import React, { useState } from 'react'
import { useRouter } from 'next/router'
import RouteError from '../ErrorHandling/RouteError/RouteError'

const RouteStopSelectorForm = ({ data }) => {
  const router = useRouter()
  const [stopSelected, setStopSelected] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`${router.asPath}/${stopSelected}`)
  }

  const selectStop = (event) => {
    setStopSelected(event.target.value)
  }
  console.log('data in routestopselectorform', data)
  if (data.status === 400) return <RouteError>{data.detail}</RouteError>
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="routes">Select stop:</label>

      <select onChange={selectStop} name="routes">
        <option value="">Select stop</option>
        {data.map((route) => (
          <option key={route.place_code} value={route.place_code}>
            {route.description}
          </option>
        ))}
      </select>
      <input type="submit" value="submit" />
    </form>
  )
}

export default RouteStopSelectorForm
