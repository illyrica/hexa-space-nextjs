import styles from '../page.module.css';
import {ShipComponent} from '../../space-ship-store-front/ui-adapter/ship-component';
import {getSpaceShips} from '../../space-ship-store-front/api-adapter/getSpaceShips';

export default async function Ships() {
  const ships = await getSpaceShips()

  return (
    <main className={styles.main}>
      <div className="ship-catalogue">
        {ships.map(ship => <ShipComponent key={ship.name} ship={ship}/>)}
      </div>
    </main>
  )
}
