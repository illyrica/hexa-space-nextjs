'use client';

const LocationFilter = ({currentFilter, locationFilterValues, filterByLocation} : {currentFilter: string, locationFilterValues: string[], filterByLocation: (location: string) => void}) => {
    return (
        <>
            <div className="flex flex-col px-4 gap-4">
                <div className="text-xl">Location</div>
                <div className="flex flex-col">
                    {locationFilterValues.map(filterValue =>
                        <div onClick={() => filterByLocation(filterValue)}
                             key={filterValue}
                             className={`py-2 px-6 border border-solid border-gray-200 cursor-pointer ${filterValue === currentFilter ? "bg-gray-200" : ""}`}>
                            {filterValue}
                        </div>
                    )}
                </div>
            </div>
        </>);
}

export default LocationFilter;
