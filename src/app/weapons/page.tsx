import { getWeaponInventory } from '@/bounded_contexts/weapon-overview/api-adapter/getWeaponInventory';
import { WeaponComponent } from '@/bounded_contexts/weapon-overview/ui/weapon-component';
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
