import {getSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";
import Navigation from "@/bounded_contexts/space-ship-store-front/ui-adapter/navigation";
import FilteredShipCatalogue from "@/bounded_contexts/space-ship-store-front/ui-adapter/filtered-ship-catalogue";

export default async function Ships() {
    const ships = await getSpaceShips();
    const shipsToDisplay = ships.filter(ship => ship.type === "destroyer");

    return (
        <div className="w-full flex flex-col items-center my-8 gap-12">
            <Navigation selectedPage={"destroyers"}/>
            <div className="text-3xl mx-auto">Welcome to Hexa Space Inc.</div>
            <FilteredShipCatalogue ships={shipsToDisplay}/>
        </div>
    )
}
