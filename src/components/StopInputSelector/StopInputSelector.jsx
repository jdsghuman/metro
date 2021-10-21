import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../Button'
import HeaderBlock from '../headerBlock'
import styles from './StopInputSelector.module.scss'

const StopInputSelector = () => {
  const inputElement = useRef(null)
  const router = useRouter()

  const [stopNumber, setStopNumber] = useState('')

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
    <>
      <HeaderBlock title="Enter Stop Number" />
      <form className={styles.form} onSubmit={getStops}>
        <label className={styles.sr__only} htmlFor="stopNumber">
          Enter Stop Number
        </label>
        <input
          type="number"
          value={stopNumber}
          onChange={handleChange}
          className={styles.input__field}
          name="stopNumber"
          placeholder="Enter stop number"
          required
          ref={inputElement}
        />
        <Button disabled={!stopNumber} primary type="submit" value="submit">
          Get Stops
        </Button>
      </form>
    </>
  )
}

export default StopInputSelector
