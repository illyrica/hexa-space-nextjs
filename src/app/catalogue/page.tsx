import {
    getCatalogueSpaceShips,
} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";
import {getClaps} from "@/bounded_contexts/space-ship-store-front/api-adapter/getClaps";
import {attachClapsToShips} from "@/bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips";
import styles from "@/app/page.module.css";
import FilteredShipCatalogue from "@/bounded_contexts/space-ship-store-front/ui-adapter/filtered-ship-catalogue";
import {ShipCatalogue} from "@/app/catalogue/ship-catalogue";


export default async function Catalogue() {
    const ships = await getCatalogueSpaceShips();

    return (
        <div className={styles.main}>
            <h1 className="text-3xl">Catalogue</h1>
            <ShipCatalogue catalogueShips={ships}/>
        </div>
    )
}