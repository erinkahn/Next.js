import Link from 'next/link';
import styles from '../app/page.module.css';

export default function Nav() {
    return <>
        <nav className="border-b-2 border-t-2 border-sky-600 my-7">
            <ul className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/work">Work</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/products">Products</Link>
            </ul>
        </nav>
    </>
}