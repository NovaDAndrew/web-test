import styles from './Usage.module.css'

export default function DiskUsage({ total, used }) {
  const usagePercentage = (used / total) * 100
  
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Disk Usage</h2>
      <div className={styles.usageBar}>
        <div 
          className={styles.usageIndicator} 
          style={{ width: `${usagePercentage}%` }}
        ></div>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Total:</span>
        <span>{total.toFixed(2)} GB</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Used:</span>
        <span>{used.toFixed(2)} GB</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Usage:</span>
        <span>{usagePercentage.toFixed(2)}%</span>
      </div>
    </div>
  )
}

