import React, { useState } from 'react'
import { useRouter } from 'next/router'
import HeaderBlock from '../headerBlock'
import Button from '../button'
import styles from './RouteStopSelectorForm.module.scss'

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
  return (
    <>
      <HeaderBlock title="Select a Stop" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.sr__only} htmlFor="routes">
          Select stop:
        </label>
        <select role="listbox" className={styles.select} onChange={selectStop} id="routes">
          <option value=""></option>
          {data.map((route) => (
            <option key={route.place_code} value={route.place_code}>
              {route.description}
            </option>
          ))}
        </select>
        <Button disabled={!stopSelected} primary type="submit" value="submit">
          Get Departure
        </Button>
      </form>
    </>
  )
}

export default RouteStopSelectorForm
