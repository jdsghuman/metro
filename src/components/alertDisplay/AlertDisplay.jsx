import { FiAlertTriangle } from 'react-icons/fi'
import styles from './AlertDisplay.module.scss'

const AlertDisplay = ({ alerts }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.alert__title}>
        <FiAlertTriangle className={styles.icon} /> Route alerts
      </h3>
      {alerts.map((alert) => {
        return (
          <div className={styles.container}>
            <p className={styles.alert__display}>{alert.alert_text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AlertDisplay
