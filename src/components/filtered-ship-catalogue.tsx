'use client';

import { ShipComponent } from "@/components/ship-component";
import {useState} from "react";
import {SpaceShip} from "@/api/getSpaceShips";
import SearchComponent from "@/components/search-component";
import LocationFilterComponent from "@/components/location-filter";

const FilteredShipCatalogue = ({ships} : {ships: SpaceShip[]}) => {
  const [locationFilter, setLocationFilter] = useState("All");
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
          <SearchComponent executeSearch={(searchTerm) => setSearchTerm(searchTerm)} />
          <div className="flex gap-8 flex-nowrap w-full px-4">
            <LocationFilterComponent currentFilter={locationFilter} locationFilterValues={locationFilterValues} filterByLocation={(filterValue) => setLocationFilter(filterValue)} />

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
