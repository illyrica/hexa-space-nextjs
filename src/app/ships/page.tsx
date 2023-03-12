import { attachClapsToShips } from '@/space-ship-store-front/clap-adapter/attachClapsToShips';
import { getClaps, incClapsForId } from '@/space-ship-store-front/db-adapter/claps-store';
import { getSpaceShips } from '../../space-ship-store-front/api-adapter/getSpaceShips';
import { ShipComponent } from '../../space-ship-store-front/ui-adapter/ship-component';
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
