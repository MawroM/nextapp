import Link from "next/link";
import links from "../utils/links";
import styles from '../../styles/Navigate.module.css'
export default function Navigate() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigate}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
