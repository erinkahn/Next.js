import fs from 'fs';
import Image from 'next/image'
import styles from '../../page.module.css'

const getProjectContent = (slug) => {
  const jsonData = fs.readFileSync("data/projects.json", "utf8");
  const data = JSON.parse(jsonData);
  const index = Object.values(data.projects).map(object => object.slug).indexOf(slug);
  const title = data.projects[index].title;
  const description = data.projects[index].description;
  const image = data.projects[index].image;
  const imageAlt = data.projects[index].alt;
  const url = data.projects[index].url;
  return {title, description, image, imageAlt, url, index};
}

export default function Project(props) {
  const slug = props.params.project;
  const { title, description, image, imageAlt, url, index } = getProjectContent(slug);
  
  return <>
    <h1>slug: {slug}</h1>
    <div className={styles.card}>
      <p>Project: {title}</p>
      <p>Description: {description}</p>
      {/* <Image
        src={image}
        alt={imageAlt}
        width={100}
        height={24}
        priority
      /> */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Site
      </a>
    </div>
  </>
}