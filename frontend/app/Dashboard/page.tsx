// app/page.tsx
'use client';

import styles from './page.module.css';


const transactions = [
  {
    id: '0xdce...42702',
    address: 'Give',
    age: '0.002',
    amount: '5.002',
  },
  {
    id: '0x26e...2b509',
    address: '0x7bC...7381f',
    age: '0.1000',
    amount: '5.102',
  },
  {
    id: '0xcab...990d8',
    address: '0x0Ff...2A0fD',
    age: '0.400',
    amount: '5.4022',
  },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          🧊 Custard Wallet
          
        </h1>
        <p className={styles.subtitle}>
          Welcome to the Custard Wallet. Instantly receive test tokens to explore our ecosystem.
        </p>

        <form>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Enter Wallet Address</label>
            <input type="text" placeholder="0xYourWalletHere..." className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Enter Amount</label>
            <input type="number" defaultValue={100} className={styles.input} />
          </div>
          <button type="submit" className={styles.button}>Send </button>
        </form>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Transaction History</h2>
          <br />
          <p className={styles.sectionTitle}>Total Transactions: 380,085 </p>
          <br />
          <p className={styles.tokenBalance}>
            Token Balance: <strong>4.25 TOKEN</strong>
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Wallet ID</th>
                <th>Transaction</th>
                <th>Token Balance</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={idx}>
                  <td>{tx.id}</td>
                  <td>{tx.address}</td>
                  <td>{tx.age}</td>
                  <td>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
