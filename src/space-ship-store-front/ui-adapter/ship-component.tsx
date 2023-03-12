"use client";

import Image from 'next/image';
import { useState } from 'react';
import {monthlyRate, SpaceShip} from '../domain/space-ship';

export const ShipComponent = ({ship}: {ship: SpaceShip}) => {
  const [numberOfRates, setNumberOfRates] = useState(12)
  return <>
    <div className="ship">
    <div>
      <Image
        src={`/images${ship.image}`}
        height={256}
        width={256}
        alt="Space Ship 1"
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

    </ul>
    </div>
  </>
}
