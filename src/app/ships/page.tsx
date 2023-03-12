import { getClaps } from '@/space-ship-store-front/api-adapter/getClaps';
import { getSpaceShips } from '@/space-ship-store-front/api-adapter/getSpaceShips';
import { attachClapsToShips } from '@/space-ship-store-front/clap-adapter/attachClapsToShips';
import styles from '../page.module.css';
import { ShipCatalogue } from './ship-catalogue';

export default async function Ships() {
  const ships = await getSpaceShips();
  const claps = await getClaps();
  const shipsWithClaps = attachClapsToShips({claps, ships});

  return (
    <main className={styles.main}>
      <ShipCatalogue shipsWithClaps={shipsWithClaps}/>
    </main>
  )
}
