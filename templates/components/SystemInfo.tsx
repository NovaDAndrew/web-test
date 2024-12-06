import styles from './SystemInfo.module.css'

export default function SystemInfo({ info }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>System Information</h2>
      <div className={styles.stat}>
        <span className={styles.statLabel}>OS:</span>
        <span>{info.os}</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>OS Version:</span>
        <span>{info.os_version}</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Architecture:</span>
        <span>{info.architecture}</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Boot Time:</span>
        <span>{info.boot_time}</span>
      </div>
    </div>
  )
}

