'use client';

import {useRouter} from "next/navigation";

const Navigation = ({selectedPage, numItemsInCart} : {selectedPage: string, numItemsInCart: number}) => {
    const pages = [
        { value: "all", displayName: "All"},
        { value: "ships", displayName: "Ships" },
        { value: "deathstars", displayName: "Death Stars" },
        { value: "destroyers", displayName: "Star Destroyers" }
    ];

    const router = useRouter();
    const goToPage = (pageName: string) => {
        if (pageName === "all") {
            router.push("/");
        }
        else {
            router.push(`/${pageName}`);
        }
    };

    return (
        <>
            <div className="flex justify-between mx-4">
                <img src={"/images/logo.png"} width={"40px"} height={"40px"} onClick={() => router.push("/")}
                     className={"cursor-pointer"}/>
                <div className="flex gap-0">
                    {pages.map(filterValue =>
                        <div onClick={() => goToPage(filterValue.value)}
                             key={filterValue.value}
                             className={`shrink-0 py-2 px-6 cursor-pointer ${filterValue.value === selectedPage ? "font-bold" : ""}`}>
                            {filterValue.displayName}
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <img src={"/images/cart.png"} className="" width="24px" height="20px"/>
                    <p className="bg-amber-500 rounded-full px-1">{numItemsInCart}</p>
                </div>
            </div>
        </>);
}

export default Navigation;
