'use client';

import {useState} from "react";

const SearchComponent = ({executeSearch} : {executeSearch: (searchTerm: string) => void}) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="flex gap-2 my-4 items-center justify-center w-[450px]">
                <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)}
                       className="p-2 w-[300px] border border-gray-200 grow-1"/>
                <div>
                    <img src="/images/search.png" onClick={() => executeSearch(searchTerm)}
                         className="cursor-pointer"/>
                </div>
            </div>
        </>);
}

export default SearchComponent;
