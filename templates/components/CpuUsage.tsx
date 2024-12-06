'use client'

import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import styles from './CpuUsage.module.css'

export default function CpuUsage({ usage, count }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Used', 'Free'],
          datasets: [{
            data: [usage, 100 - usage],
            backgroundColor: ['#3498db', '#ecf0f1'],
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }
  }, [usage])

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>CPU Usage</h2>
      <div className={styles.chartContainer}>
        <canvas ref={chartRef} />
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Usage:</span>
        <span>{usage}%</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statLabel}>CPU Count:</span>
        <span>{count}</span>
      </div>
    </div>
  )
}

