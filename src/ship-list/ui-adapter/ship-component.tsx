"use client";
import { SpaceShip } from '@/ship-list/domain/space-ship';
import Image from 'next/image';
import ship1 from "../../../public/images/ship1.jpeg"
import { Clapper } from "./Clapper";
import LazyHydrate from "react-lazy-hydration";

// import dynamic from 'next/dynamic'

// const DynamicClap = dynamic(() =>
//   import('./Clapper').then((mod) => mod.Clapper)
// )


export const ShipComponent = ({ship}: {ship: SpaceShip}) => {

  return <>

    <div className="ship">
    <div>
      <Image
        src={ship1}
        height={200}
        width={250}
        alt="Space Ship 1"
      />
      <p>Ship Alpha-1</p>
    </div>
    <ul className="ship-data">
      <li><b>Price</b>:
        <span data-testid="ship-price">{ship.price}</span>
      </li>
      <li><b>Location</b>: {ship.location}</li>
      <li><b>Mileage</b>: {ship.mileage}</li>
      <li><b>Speed</b>: {ship.speed} LY/sec</li>
      <li><b>Built</b>: {ship.constructionYear}</li>

      <LazyHydrate on="click">
        <Clapper />
      </LazyHydrate>

    </ul>
    </div>
  </>
}