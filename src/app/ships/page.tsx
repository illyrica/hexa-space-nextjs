import styles from '../page.module.css';
import {ShipComponent} from '../../space-ship-store-front/ui-adapter/ship-component';
import {getSpaceShips} from '../../space-ship-store-front/api-adapter/getSpaceShips';
import { attachClapsToShips } from '@/space-ship-store-front/clap-adapter/attachClapsToShips';
import { getClaps } from '@/space-ship-store-front/db-adapter/claps-store';

export default async function Ships() {
  const ships = await getSpaceShips();
  const claps = getClaps();
  const shipsWithClaps = attachClapsToShips({claps, ships});

  return (
    <main className={styles.main}>
      <div className="ship-catalogue">
        {shipsWithClaps.map(ship => <ShipComponent key={ship.name} ship={ship}/>)}
      </div>
    </main>
  )
}
