import fs from 'fs'
import Link from 'next/link'
import styles from './page.module.css'

const getProjectsMetadata = () => {
  const jsonData = fs.readFileSync("data/projects.json", "utf8");
  let data = JSON.parse(jsonData).projects.map(project => { return project.slug });
  return data;
}

export default function Home() {
  const projectMetadata = getProjectsMetadata();
  const projects = projectMetadata.map((slug, i) => {
    return (
      <li key={i}>
        <Link href={`/work/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </li >
    )
  })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          New Website Coming in&nbsp;
          <code className={styles.code}>2023</code>
        </p>
      </div>
    
      <ul className="work">{projects}</ul>
    </main>
  )
}
