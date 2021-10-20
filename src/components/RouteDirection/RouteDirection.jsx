import { useRouter } from 'next/router'
import Button from '../button'
import ButtonBlock from '../buttonBlock'
import HeaderBlock from '../headerBlock'
import styles from './RouteDirection.module.scss'

const RouteDirection = ({ data }) => {
  const router = useRouter()

  const getStops = (directionid) => {
    router.push(`${router.asPath}/${directionid}`)
  }

  return (
    <div>
      <HeaderBlock title="Select direction" />
      <ButtonBlock className={styles.container} justify="center">
        {data?.map((route) => {
          return (
            <Button
              type="button"
              accent
              onClick={() => getStops(route.direction_id)}
              key={route.direction_id}
            >
              {route.direction_name}
            </Button>
          )
        })}
      </ButtonBlock>
    </div>
  )
}

export default RouteDirection
