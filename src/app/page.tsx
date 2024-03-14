import {getSpaceShips} from "@/api/getSpaceShips";
import Navigation from "@/components/navigation";
import FilteredShipCatalogue from "@/components/filtered-ship-catalogue";

export default async function Home() {
    const ships = await getSpaceShips();

    return (
      <div className="w-full flex flex-col items-center my-8 gap-12">
          <Navigation selectedPage={"all"}/>
          <div className="text-3xl mx-auto">Welcome to Hexa Space Inc.</div>
          <FilteredShipCatalogue ships={ships}/>
      </div>
    )
  }
