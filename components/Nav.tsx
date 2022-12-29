import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Nav() {
    return <>
        <nav>
            <ul className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/work">Work</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/products">Products</Link>
            </ul>
        </nav>
    </>
}