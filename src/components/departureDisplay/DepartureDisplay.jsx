import useTransitDisplay from '../hooks/useTransitDisplay'
import { BsPlusCircle } from 'react-icons/bs'
import { BiMinusCircle } from 'react-icons/bi'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import classNames from 'classnames/bind'
import Button from '../button'
import styles from './DepartureDisplay.module.scss'
import HeaderBlock from '../headerBlock'

const cx = classNames.bind(styles)

const DepartureDisplay = ({ data }) => {
  const { departures, stops } = data
  const { stopsToShow, getMoreStops, toggleShowAllRoutes } = useTransitDisplay(departures)
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.description}>{stops[0].description}</p>
        <div>
          <p className={styles.description__stop}>
            Stop #: <span className={styles.number}>{stops[0].stop_id}</span>
          </p>
        </div>
      </div>
      <div className={styles.subheading}>
        <div className={styles.left}>
          <p>Route</p>
          <p>Destination</p>
        </div>
        <p>Departs</p>
      </div>
      <ul>
        {departures.length === 0 ? (
          <HeaderBlock subtitle="No departures currently" />
        ) : (
          stopsToShow.map((d) => {
            return (
              <li className={styles.list} key={d.trip_id}>
                <p className={cx('left', 'description')}>
                  <span>{d.route_short_name}</span>
                  <span>{d.description}</span>
                </p>
                <p className={styles.time}>
                  <MdOutlineDoubleArrow className={cx('blink')} />
                  {d.departure_text}
                </p>
              </li>
            )
          })
        )}
      </ul>
      {departures.length > 3 && (
        <Button
          type="button"
          onClick={() => getMoreStops(departures)}
          accent
          className={styles.button}
        >
          {toggleShowAllRoutes ? (
            <BiMinusCircle className={styles.icon__minus} />
          ) : (
            <BsPlusCircle className={styles.icon__plus} />
          )}
          Departures
        </Button>
      )}
    </div>
  )
}

export default DepartureDisplay
