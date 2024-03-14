import {getSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";
import Navigation from "@/bounded_contexts/space-ship-store-front/ui-adapter/navigation";
import FilteredShipCatalogue from "@/bounded_contexts/space-ship-store-front/ui-adapter/filtered-ship-catalogue";

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
