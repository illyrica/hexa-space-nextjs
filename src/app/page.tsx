import styles from './page.module.css'
import {getSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";
import {getClaps} from "@/bounded_contexts/space-ship-store-front/api-adapter/getClaps";
import {attachClapsToShips} from "@/bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips";
import FilteredShipCatalogue from "@/bounded_contexts/space-ship-store-front/ui-adapter/filtered-ship-catalogue";

export default async function Home() {
    const ships = await getSpaceShips();
    const claps = await getClaps();
    const shipsWithClaps = attachClapsToShips({claps, ships});

    return (
      <div className={styles.main}>
        <h1 className="text-3xl">Welcome to Hexa Space Inc.</h1>
          <FilteredShipCatalogue shipsWithClaps={shipsWithClaps}/>
      </div>
    )
  }
