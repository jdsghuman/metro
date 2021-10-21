import { useRouter } from 'next/router'
import Button from '../button'
import ButtonBlock from '../buttonBlock'
import HeaderBlock from '../headerBlock'
import styles from './TransitTypeSelect.module.scss'

const TransitTypeSelect = () => {
  const router = useRouter()

  const selectTransitType = (type) => {
    router.push(type)
  }

  return (
    <div className={styles.container}>
      <HeaderBlock title="Realtime Departures" />
      <ButtonBlock justify="center">
        <Button type="button" primary onClick={() => selectTransitType('route')}>
          By Route
        </Button>
        <Button type="button" accent onClick={() => selectTransitType('stop')}>
          By Stop #
        </Button>
      </ButtonBlock>
    </div>
  )
}

export default TransitTypeSelect
