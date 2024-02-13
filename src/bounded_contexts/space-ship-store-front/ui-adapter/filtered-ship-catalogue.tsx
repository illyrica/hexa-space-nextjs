'use client';

import { postIncreaseClapsForId } from "../clap-adapter/postIncreaseClapsForId";
import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";
import {useState} from "react";
import {SpaceShip} from "@/bounded_contexts/space-ship-store-front/domain/space-ship";

const FilteredShipCatalogue = ({shipsWithClaps} : {shipsWithClaps: SpaceShip[]}) => {
  const [filter, setFilter] = useState("all");
  const [preliminarySearchTerm, setPreliminarySearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filterValues = [
    { value: "all", displayName: "All"},
    { value: "ship", displayName: "Ships" },
    { value: "star", displayName: "Death Stars" },
    { value: "weapon", displayName: "Armory" }
  ];



  const determineShipsToDisplay = () => {
    const filteredShips = filter === "all" ? shipsWithClaps : shipsWithClaps.filter(ship => ship.type === filter);
    if (searchTerm.length > 0) {
      return filteredShips.filter(ship => ship.name.startsWith(searchTerm));
    }
    return filteredShips;
  }

  const shipsToDisplay = determineShipsToDisplay();

  return (
      <>
        <div className="flex flex-column items-center w-full">
          <div className="flex gap-2 my-4 items-center justify-center w-[450px]">
            <input type="text" placeholder="Search" onChange={(e) => setPreliminarySearchTerm(e.target.value)} className="p-2 w-[300px] border border-gray-200 grow-1"/>
            <div>
              <img src="/images/search.png" onClick={() => setSearchTerm(preliminarySearchTerm)} className="cursor-pointer"/>
            </div>
          </div>
          <div className="flex gap-0 w-[450px] justify-center">
            {filterValues.map(filterValue =>
                <div onClick={() => setFilter(filterValue.value)}
                     key={filterValue.value}
                     className={`shrink-0 py-2 px-6 border border-solid border-gray-200 cursor-pointer ${filterValue.value === filter ? "bg-gray-200" : ""}`}>
                  {filterValue.displayName}
                </div>
            )}
          </div>
              {shipsToDisplay.length === 0 && (
                  <div className="w-full p-10 text-center">These are not the ships you are looking for...</div>
              )}
              {shipsToDisplay.length > 0 && (
                  <div className="w-full flex flex-row gap-4 flex-wrap justify-center">
                    {shipsToDisplay.map(ship => <ShipComponent key={ship.id} ship={ship}
                                                            persistClapInc={postIncreaseClapsForId}/>)}
                  </div>
              )}
        </div>
  </>);
}

export default FilteredShipCatalogue;
