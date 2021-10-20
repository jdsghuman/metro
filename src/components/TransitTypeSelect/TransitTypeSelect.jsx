import { useRouter } from 'next/router'
import Button from '../button'
import ButtonBlock from '../buttonBlock/ButtonBlock'
import HeaderBlock from '../headerBlock'
import styles from './TransitTypeSelect.module.scss'

const TransitTypeSelect = () => {
  const router = useRouter()

  const selectTransitType = (type) => {
    router.push(type)
  }

  return (
    <div className={styles.container}>
      <HeaderBlock title="Realtime Departures" subtitle="Select" />
      <ButtonBlock justify="center">
        <Button type="button" primary onClick={() => selectTransitType('route')}>
          By route
        </Button>
        <Button type="button" accent onClick={() => selectTransitType('stop')}>
          By stop #
        </Button>
      </ButtonBlock>
    </div>
  )
}

export default TransitTypeSelect
