import styles from "./page.module.css";
import Dashboard from "./snippets/getname";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Dashboard />
      </main>
    </div>
  );
}
