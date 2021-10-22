import { FiAlertTriangle } from 'react-icons/fi'
import styles from './AlertDisplay.module.scss'

const AlertDisplay = ({ alerts }) => {
  return (
    <div className={styles.section}>
      <h3 data-testid="alert-heading" className={styles.alert__title}>
        <FiAlertTriangle className={styles.icon} /> Route alerts
      </h3>
      {alerts?.map((alert, i) => {
        return (
          <div key={i} className={styles.container}>
            <p className={styles.alert}>{alert.alert_text}</p>
            <p data-testid="alert-closed" className={styles.alert__closed}>
              Stop closed: {alert.stop_closed ? 'Yes' : 'No'}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default AlertDisplay
