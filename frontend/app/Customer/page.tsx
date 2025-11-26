// app/page.tsx
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Custard Wallet</h1>
        <p className={styles.subtitle}>Welcome back! Here's your loyalty summary.</p>

        <div className={styles.loyaltyCard}>
          <h2 className={styles.cardTitle}>🎁 CUSTARD LOYALTY CARD</h2>
          <p><strong>Member:</strong> 0xYourWalletHere</p>
          <p><strong>Balance:</strong> 2.450 points</p>
          <p><strong>Valid Thru:</strong> 12/2026</p>
        </div>

        <div className={styles.info}>
          <p><strong>Wallet:</strong> 0xYourWalletHere...</p>
          <p><strong>Points Balance:</strong> 2.450 pts</p>
        </div>

        <div className={styles.transactions}>
          <h3>Transaction History <span className={styles.total}>Total Transactions: 158</span></h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>+Pts</th>
                <th>−Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jul 10</td>
                <td>Referred a friend</td>
                <td>+100</td>
                <td>−100</td>
              </tr>
              <tr>
                <td>Jul 09</td>
                <td>Coffee purchase</td>
                <td>500</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Jul 08</td>
                <td>Signup bonus</td>
                <td>50</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Jul 08</td>
                <td>Ice cream</td>
                <td>−35</td>
                <td>−35</td>
              </tr>
              <tr>
                <td>Jul 07</td>
                <td>Survey reward</td>
                <td>−35</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
