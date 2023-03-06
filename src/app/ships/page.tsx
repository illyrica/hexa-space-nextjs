import styles from '../page.module.css'
import Image from 'next/image';
import ship1 from "../../../public/images/ship1.jpeg"
import { ShipComponent } from './ship-component';

async function getData() {
    const res = await fetch('http://localhost:3000/api/hello',  { cache: 'no-store' });
    return res.json();

}

export default async function Ships() {
  const apiData = await getData()

  return (
    <main className={styles.main}>
      <ShipComponent ship={{
        name: "XV-1 Turbo Alpha",
        price: 50_000,
        location: "Ganymed",
        image: "/ship1.jpg",
        mileage: 1000,
        speed: 500,
        constructionYear: 3451,
      }}/>
    </main>
  )
}
