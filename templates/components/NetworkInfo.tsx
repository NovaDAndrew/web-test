import styles from './NetworkInfo.module.css'

export default function NetworkInfo({ networkInfo }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Network Interfaces</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Interface</th>
            <th>Address</th>
            <th>Netmask</th>
            <th>Broadcast</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(networkInfo).map(([interface, addresses]) =>
            addresses.map((addr, index) => (
              <tr key={`${interface}-${index}`}>
                <td>{interface}</td>
                <td>{addr.address}</td>
                <td>{addr.netmask || 'N/A'}</td>
                <td>{addr.broadcast || 'N/A'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

