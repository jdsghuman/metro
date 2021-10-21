import { useRouter } from 'next/router'
import Button from '../Button'
import ButtonBlock from '../ButtonBlock'
import HeaderBlock from '../HeaderBlock'
import styles from './RouteDirection.module.scss'

const RouteDirection = ({ data }) => {
  const router = useRouter()

  const getStops = (directionid) => {
    router.push(`${router.asPath}/${directionid}`)
  }

  return (
    <div className={styles.container}>
      <HeaderBlock title="Select direction" />
      <ButtonBlock justify="center">
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
