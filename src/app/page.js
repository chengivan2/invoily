import styles from "./page.module.css";
import Greeting from "./snippets/Greeting";

export default function Home() {
  return (
    <div className="main-wrapper">
      <main className={styles.main}>
        <Greeting />
      </main>
    </div>
  );
}
