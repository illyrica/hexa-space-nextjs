import {getSpaceShips} from "@/api/getSpaceShips";
import Navigation from "@/components/navigation";
import FilteredShipCatalogue from "@/components/filtered-ship-catalogue";

export default async function Ships() {
    const ships = await getSpaceShips();
    const shipsToDisplay = ships.filter(ship => ship.type === "ship");

    return (
        <div className="w-full flex flex-col items-center my-8 gap-12">
            <Navigation selectedPage={"ships"}/>
            <div className="text-3xl mx-auto">Welcome to Hexa Space Inc.</div>
            <FilteredShipCatalogue ships={shipsToDisplay}/>
        </div>
)
}
