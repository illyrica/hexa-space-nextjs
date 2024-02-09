'use client';

import { postIncreaseClapsForId } from "../clap-adapter/postIncreaseClapsForId";
import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";
import {useState} from "react";
import {SpaceShip} from "@/bounded_contexts/space-ship-store-front/domain/space-ship";

const FilteredShipCatalogue = ({shipsWithClaps} : {shipsWithClaps: SpaceShip[]}) => {
  const [filter, setFilter] = useState("all");

  const filterValues = [
    { value: "all", displayName: "All"},
    { value: "ship", displayName: "Ships" },
    { value: "star", displayName: "Death Stars" },
    { value: "weapon", displayName: "Armory" }
  ];

  const filterShips = filter === "all" ? shipsWithClaps : shipsWithClaps.filter(ship => ship.type === filter);

  return (
      <>
        <div className="flex flex-column items-center w-full">
          <div className="flex gap-0">
            {filterValues.map(filterValue =>
                <div onClick={() => setFilter(filterValue.value)}
                     key={filterValue.value}
                     className={`shrink-0 py-2 px-6 border border-solid border-gray-200 cursor-pointer ${filterValue.value === filter ? "bg-gray-200" : ""}`}>
                  {filterValue.displayName}
                </div>
            )}
          </div>
              {filterShips.length === 0 && (
                  <div className="w-full p-10 text-center">Coming soon...</div>
              )}
              {filterShips.length > 0 && (
                  <div className="w-full flex flex-row gap-4 flex-wrap justify-center">
                    {filterShips.map(ship => <ShipComponent key={ship.id} ship={ship}
                                                            persistClapInc={postIncreaseClapsForId}/>)}
                  </div>
              )}
        </div>
  </>);
}

export default FilteredShipCatalogue;
