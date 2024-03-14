"use client";
import styles from "./ship.module.css";

import Image from "next/image";
import { useState } from "react";
import { RatesComponent } from "./rates-component";
import {useRouter} from "next/navigation";
import {
  DEFAULT_NUM_OF_MONTH,
  monthlyRate,
  SpaceShip
} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShips";

export const ShipComponent = ({
  ship,
}: {
  ship: SpaceShip;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  const availabilityClass = ship.inStock > 0 ? (ship.inStock > 5 ? "bg-green-500" : "bg-yellow-500") : "bg-red-500";
  return (
    <>
      <div className={styles.ship}>
        <div>
          <Image
            src={`/images${ship.image}`}
            height={256}
            width={256}
            alt="{Bild}"
            priority
          />
          <p>{ship.name}</p>
        </div>
        <div className={styles.shipData}>
          {ship.mileage && (
              <div>
                <b>Mileage (ly)</b>:{" "}
                <span data-testid="ship-mileage"> {ship.mileage}</span>
              </div>
          )}
          <div className="flex flex-col">
            <b>Availability:</b><span className={'border border-gray-500 rounded-3xl w-[24px] h-[24px] ' + availabilityClass} />
          </div>
          <div className="flex flex-col">
            <b>Price:</b><span data-testid="ship-price">{ship.price}</span>
          </div>
          <div className="flex flex-col">
            <b>Monthly Rate:</b>
            <span data-testid="monthly-rate">
              {monthlyRate(ship, numberOfRates).toFixed(2)}
            </span>
          </div>
          <div>
            <div className="rates">
              <RatesComponent
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
