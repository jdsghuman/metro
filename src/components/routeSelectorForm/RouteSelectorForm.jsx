import React, { useState } from 'react'
import { useRouter } from 'next/router'
import HeaderBlock from '../headerBlock'
import Button from '../button'
import styles from './RouteSelectorForm.module.scss'

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
    <>
      <HeaderBlock title="Select a route" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.sr__only} htmlFor="selectRoute">
          Select a route
        </label>
        <select className={styles.select} onChange={handleRouteNumber} id="selectRoute">
          <option value=""></option>
          {routes.map((route) => (
            <option key={route.route_id} value={route.route_id}>
              {route.route_label}
            </option>
          ))}
        </select>
        <Button disabled={!routeNumber} primary type="submit" value="submit">
          Select Route
        </Button>
      </form>
    </>
  )
}

export default RouteSelectorForm
