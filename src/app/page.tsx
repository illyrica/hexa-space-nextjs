import styles from './page.module.css'

async function getData() {
    const res = await fetch('http://localhost:3000/api/hello');
    return res.json();

}

export default async function Home() {
const apiData = await getData()

  return (
    <main className={styles.main}>
      {apiData.name}
    </main>
  )
}
