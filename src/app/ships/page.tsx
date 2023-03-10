import { times } from 'remeda';
import { SpaceShip } from '@/ship-list/domain/space-ship';
import { ShipComponent } from '@/ship-list/ui-adapter/ship-component';
import styles from '../page.module.css';

async function getData() {
    const res = await fetch('http://localhost:3000/api/inYard',  { cache: 'no-store' });
    return res.json();
}

async function getShips() {
  const shipTemplate: SpaceShip = {
    name: "XV-1 Turbo Alpha",
    price: 50_000,
    location: "Ganymed",
    image: "/ship1.jpg",
    mileage: 1000,
    speed: 500,
    constructionYear: 3451}

  return times(9, () => shipTemplate)
}

export default async function Ships() {
  // const apiData = await getData()
  const ships = await getShips()
  return (
    <main className={styles.main}>
      <div style={{height: 2000, width: 1000, backgroundColor: "blue"}} > </div>
      <div className="ship-catalogue">
        {ships.map(ship => <ShipComponent ship={ship}/>)}
      </div>
    </main>
  )
}
