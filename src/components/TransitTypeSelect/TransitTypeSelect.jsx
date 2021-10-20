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
    <div>
      <HeaderBlock title="Realtime Departures" subtitle="Select" />
      <ButtonBlock className={styles.container} justify="center">
        <Button primary onClick={() => selectTransitType('route')}>
          By route
        </Button>
        <Button accent onClick={() => selectTransitType('stop')}>
          By stop #
        </Button>
      </ButtonBlock>
    </div>
  )
}

export default TransitTypeSelect
