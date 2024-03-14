'use client';

import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";
import {useState} from "react";
import {SpaceShip} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";

const FilteredShipCatalogue = ({ships} : {ships: SpaceShip[]}) => {
  const [locationFilter, setLocationFilter] = useState("All");
  const [preliminarySearchTerm, setPreliminarySearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const locationFilterValues = ["All"];
  new Set(ships.map(ship => ship.location).sort((a, b) => a.localeCompare(b))).forEach(location => locationFilterValues.push(location));

  const determineShipsToDisplay = () => {
    const filteredShips = locationFilter === "All" ? ships : ships.filter(ship => ship.location === locationFilter);
    if (searchTerm.length > 0) {
      return filteredShips.filter(ship => ship.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    }
    return filteredShips;
  }

  const shipsToDisplay = determineShipsToDisplay();

  return (
      <>
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-2 my-4 items-center justify-center w-[450px]">
            <input type="text" placeholder="Search" onChange={(e) => setPreliminarySearchTerm(e.target.value)} className="p-2 w-[300px] border border-gray-200 grow-1"/>
            <div>
              <img src="/images/search.png" onClick={() => setSearchTerm(preliminarySearchTerm)} className="cursor-pointer"/>
            </div>
          </div>
          <div className="flex gap-8 flex-nowrap w-full px-4">
            <div className="flex flex-col px-4 gap-4">
              <div className="text-xl">Location</div>
              <div className="flex flex-col">
                {locationFilterValues.map(filterValue =>
                    <div onClick={() => setLocationFilter(filterValue)}
                         key={filterValue}
                         className={`py-2 px-6 border border-solid border-gray-200 cursor-pointer ${filterValue === locationFilter ? "bg-gray-200" : ""}`}>
                      {filterValue}
                    </div>
                )}
              </div>
            </div>

              {shipsToDisplay.length === 0 && (
                  <div className="w-full p-10 text-center">These are not the ships you are looking for...</div>
              )}
              {shipsToDisplay.length > 0 && (
                  <div className="w-full flex flex-row gap-4 flex-wrap justify-center">
                    {shipsToDisplay.map(ship => <ShipComponent key={ship.id} ship={ship}/>)}
                  </div>
              )}
          </div>
        </div>
  </>);
}

export default FilteredShipCatalogue;
