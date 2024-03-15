import {getSpaceShips} from "@/api/getSpaceShips";
import FilteredShipCatalogue from "@/components/filtered-ship-catalogue";

export default async function Home() {
    const ships = await getSpaceShips();
    return (
        <>
            <FilteredShipCatalogue ships={ships} selectedPage={"all"}/>
        </>
    )
}
