import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					(This is the Homepage...pretty right?)
					<code className={styles.code}> 12/2022</code>
				</p>
			</div>
		</main>
	);
}
