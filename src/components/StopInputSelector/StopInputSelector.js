import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const StopInputSelector = () => {
  const inputElement = useRef(null)
  const router = useRouter()

  const [stopNumber, setStopNumber] = useState('')
  console.log('pathname', router.pathname)

  const getStops = (event) => {
    event.preventDefault()
    router.pathname === '/stop' ? router.push(`stop/${stopNumber}`) : router.push(`${stopNumber}`)
  }

  const handleChange = (event) => setStopNumber(event.target.value)

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
  }, [])

  return (
    <form onSubmit={getStops}>
      <label htmlFor="stopNumber">
        Enter Stop Number
        <input
          type="text"
          value={stopNumber}
          onChange={handleChange}
          name="stopNumber"
          placeholder="Enter stop number"
          required
          ref={inputElement}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}

export default StopInputSelector
