'use client'

import { useState, useEffect } from 'react'
import SystemInfo from './SystemInfo'
import CpuUsage from './CpuUsage'
import MemoryUsage from './MemoryUsage'
import DiskUsage from './DiskUsage'
import NetworkInfo from './NetworkInfo'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const [systemInfo, setSystemInfo] = useState(null)

  useEffect(() => {
    const fetchSystemInfo = async () => {
      try {
        const response = await fetch('/api/system-info')
        const data = await response.json()
        setSystemInfo(data)
      } catch (error) {
        console.error('Error fetching system info:', error)
      }
    }

    fetchSystemInfo()
    const interval = setInterval(fetchSystemInfo, 30000)

    return () => clearInterval(interval)
  }, [])

  if (!systemInfo) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>System Status Dashboard</h1>
      <div className={styles.grid}>
        <SystemInfo info={systemInfo} />
        <CpuUsage usage={systemInfo.cpu_usage} count={systemInfo.cpu_count} />
        <MemoryUsage total={systemInfo.memory_total} used={systemInfo.memory_used} />
        <DiskUsage total={systemInfo.disk_total} used={systemInfo.disk_used} />
      </div>
      <NetworkInfo networkInfo={systemInfo.network_info} />
    </div>
  )
}

