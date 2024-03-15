'use client';

import {Ship} from "@/components/ship";
import {useState} from "react";
import {SpaceShip} from "@/api/getSpaceShips";
import Search from "@/components/search";
import LocationFilter from "@/components/location-filter";
import Navigation from "@/components/navigation";
import {addToCart, getNumItemsInCart} from "@/api/shoppingCart";

const FilteredShipCatalogue = ({ships, selectedPage}: { ships: SpaceShip[], selectedPage: string }) => {
    const [locationFilter, setLocationFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsInCart, setItemsInCart] = useState(0);

    const locationFilterValues = ["All"];
    new Set(ships.map(ship => ship.location).sort((a, b) => a.localeCompare(b))).forEach(location => locationFilterValues.push(location));

    const determineShipsToDisplay = () => {
        const shipsOnPage = selectedPage === "all" ? ships : ships.filter(ship => ship.type === selectedPage);
        const filteredShips = locationFilter === "All" ? shipsOnPage : shipsOnPage.filter(ship => ship.location === locationFilter);
        if (searchTerm.length > 0) {
            return filteredShips.filter(ship => ship.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
        }
        return filteredShips;
    }

    const addToCartAndRefresh = (shipId: string) => {
        addToCart(shipId);
        setItemsInCart(getNumItemsInCart());
    }

    const shipsToDisplay = determineShipsToDisplay();

    return (
        <>
            <div className="w-full flex flex-col items-center my-8 gap-12">
                <Navigation selectedPage={"all"} numItemsInCart={itemsInCart}/>
                <div className="text-3xl mx-auto">Welcome to Hexa Space Inc.</div>
                <div className="flex flex-col items-center w-full">
                    <Search executeSearch={(searchTerm) => setSearchTerm(searchTerm)}/>
                    <div className="flex gap-8 flex-nowrap w-full px-4">
                        <LocationFilter currentFilter={locationFilter} locationFilterValues={locationFilterValues}
                                        filterByLocation={(filterValue) => setLocationFilter(filterValue)}/>

                        {shipsToDisplay.length === 0 && (
                            <div className="w-full p-10 text-center">These are not the ships you are looking
                                for...</div>
                        )}
                        {shipsToDisplay.length > 0 && (
                            <div className="w-full flex flex-row gap-4 flex-wrap justify-center">
                                {shipsToDisplay.map(ship => <Ship key={ship.id} ship={ship}
                                                                  addToCart={addToCartAndRefresh}/>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>);
}

export default FilteredShipCatalogue;
