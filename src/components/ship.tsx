"use client";

import Image from "next/image";
import { useState } from "react";
import { Rates } from "./rates";
import {
  DEFAULT_NUM_OF_MONTH,
  monthlyRate,
  SpaceShip
} from "@/api/getSpaceShips";

export const Ship = ({
  ship,
}: {
  ship: SpaceShip;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  const availabilityClass = ship.inStock > 0 ? (ship.inStock > 5 ? "bg-green-500" : "bg-yellow-500") : "bg-red-500";
  return (
    <>
      <div className="flex flex-row gap-4 p-6 bg-gray-100 rounded text-[#858585] shadow-sm">
        <div className="m-4">
          <Image
              src={`/images${ship.image}`}
              height={256}
              width={256}
              alt="{Bild}"
              priority
              className="rounded"
          />
          <p>{ship.name}</p>
        </div>

        <div className="flex flex-col gap-4 m-4">
          <div>
            <b>Location:</b>{ship.location}
          </div>
          {ship.mileage && (
              <div>
                <b>Mileage (ly)</b>:{" "}
                <span data-testid="ship-mileage"> {ship.mileage}</span>
              </div>
          )}
          <div className="flex flex-col">
            <b>Availability:</b><span
              className={'border border-gray-500 rounded-3xl w-[24px] h-[24px] ' + availabilityClass}/>
          </div>
          <div className="flex flex-col">
            <b>Price:</b><span data-testid="ship-price">{ship.price}</span>
          </div>
          <div className="flex flex-col">
            <b>Monthly Rate:</b>
            <span>
              {monthlyRate(ship, numberOfRates).toFixed(2)}
            </span>
          </div>
          <div>
            <div>
              <Rates
                  numberOfRates={numberOfRates}
                  setNumberOfRates={setNumberOfRates}
              />
              <div>Pay in {numberOfRates} Rates</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
