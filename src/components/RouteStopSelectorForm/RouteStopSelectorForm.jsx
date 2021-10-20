import React, { useState } from 'react'
import { useRouter } from 'next/router'
import RouteError from '../ErrorHandling/RouteError/RouteError'
import HeaderBlock from '../HeaderBlock'
import Button from '../Button'
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
  console.log('data in routestopselectorform', data)
  if (data.status === 400) return <RouteError>{data.detail}</RouteError>
  return (
    <>
      <HeaderBlock title="Select a stop" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.sr__only} htmlFor="routes">
          Select stop:
        </label>
        <select className={styles.select} onChange={selectStop} id="routes">
          <option value=""></option>
          {data.map((route) => (
            <option key={route.place_code} value={route.place_code}>
              {route.description}
            </option>
          ))}
        </select>
        <Button disabled={!stopSelected} primary type="submit" value="submit">
          Select a Stop
        </Button>
      </form>
    </>
  )
}

export default RouteStopSelectorForm
