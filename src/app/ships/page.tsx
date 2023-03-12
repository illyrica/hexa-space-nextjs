import { getSpaceShips } from '@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips';
import { attachClapsToShips } from '@/bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips';
import { ShipCatalogue } from './ship-catalogue';
import styles from '../page.module.css';
import { getClaps } from '@/bounded_contexts/space-ship-store-front/api-adapter/getClaps';

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
