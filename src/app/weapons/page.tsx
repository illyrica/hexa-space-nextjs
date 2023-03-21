import {getWeaponInventory} from '@/bounded_contexts/weapon-inventory/api-adapter/getWeaponInventory';
import {WeaponComponent} from '@/bounded_contexts/weapon-inventory/ui-adapter/weapon-component';
import styles from '../page.module.css';


export default async function Ships() {
  const weaponInventory = await getWeaponInventory()

  return (
    <main className={styles.main}>
      <h1>Weapon Inventory</h1>
      <div className='weapon-inventory'>
        {weaponInventory.map(w => <WeaponComponent weapon={w}></WeaponComponent>)}
      </div>
    </main>
  )
}
