import Link from 'next/link'
import styles from './page.module.css'



export default async function Home() {
    return (
      <main className={styles.main}>
        <h1>Welcome to Hexa Space Inc.</h1>
        <p>Browse our our collection of fine <Link href={{pathname: "/ships"}}>space ships</Link></p>
      </main>
    )
  }
