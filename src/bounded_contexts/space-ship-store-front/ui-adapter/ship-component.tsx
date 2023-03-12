"use client";

import Image from 'next/image';
import { useState } from 'react';
import {DEFAULT_NUM_OF_MONTH, monthlyRate, SpaceShip} from '../domain/space-ship';
import { Clapper } from './clapper';

export const ShipComponent = ({ship, persistClapInc}: {ship: SpaceShip, persistClapInc: (id: string) => Promise<{claps: number}>}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH)
  return <>
    <div className="ship">
    <div>
      <Image
        src={`/images${ship.image}`}
        height={256}
        width={256}
        alt={ship.name}
        priority
      />
      <p>{ship.name}</p>
    </div>
    <ul className="ship-data">
      <li><b>Location</b>: {ship.location}</li>
      {ship.mileage && <li><b>Mileage (ly)</b>: <span data-testid="ship-mileage"> {ship.mileage}</span></li>}
      <li><b>Speed</b>: {ship.speed} LY/sec</li>
      <li><b>Built</b>: {ship.constructionYear}</li>
      <li><b>Price</b>:
        <span data-testid="ship-price"> {ship.price}</span>
      </li>
      <li>
        <br />
        <input
          data-testid="number-of-rates"
          type="range"
          id="rates" name="rates"
          min="2" max="24" value={numberOfRates}
          onChange={(e) => setNumberOfRates(Number(e.target.value))}/>
        <br />
        <label htmlFor="rates">Pay in {numberOfRates} Rates</label>

      </li>
      <li><b>Monthly Rate</b>:
        <span data-testid="monthly-rate"> {monthlyRate(ship, numberOfRates).toFixed(2)}</span>
      </li>

      <Clapper numberOfClaps={ship.claps?? 0} persistInc={() => persistClapInc(ship.id)}/>

    </ul>
    </div>
  </>
}
