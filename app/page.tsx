import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					New Website Coming in&nbsp;
					<code className={styles.code}>2023</code>
				</p>
			</div>
		</main>
	);
}
