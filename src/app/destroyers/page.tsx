import {getSpaceShips} from "@/api/getSpaceShips";
import FilteredShipCatalogue from "@/components/filtered-ship-catalogue";

export default async function Ships() {
    const ships = await getSpaceShips();
    return (
        <>
            <FilteredShipCatalogue ships={ships} selectedPage={"destroyer"}/>
        </>
    )
}
