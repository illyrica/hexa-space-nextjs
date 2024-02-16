"use client";
import styles from "./ship.module.css";

import Image from "next/image";
import { useState } from "react";
import { incClaps } from "../domain/incClaps";
import {
  DEFAULT_NUM_OF_MONTH,
  monthlyRate,
  SpaceShip,
} from "../domain/space-ship";
import { Clapper } from "./clapper";
import { RatesComponent } from "./rates-component";

export const ShipDetailsComponent = ({
  ship,
  persistClapInc,
}: {
  ship: SpaceShip;
  persistClapInc: incClaps;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  const availabilityClass = ship.inStock > 0 ? (ship.inStock > 5 ? "bg-green-500" : "bg-yellow-500") : "bg-red-500"
  return (
    <>
      <div className={styles.shipDetailsContainer}>
        <h3>{ship.name}</h3>
        <div className={styles.shipDetails}>
          <div>
            <Image
                src={`/images${ship.image}`}
                height={256}
                width={500}
                alt="{Bild}"
                priority
            />
          </div>
          <div className={styles.detailsAndPrice}>
            <div className={styles.shipData}>
              <b>Data</b>
              <div>
                <b>Location:</b>{ship.location}
              </div>
              {ship.mileage && (
                  <div>
                    <b>Mileage (ly)</b>:{" "}
                    <span data-testid="ship-mileage"> {ship.mileage}</span>
                  </div>
              )}
              <div>
                <b>Speed:</b>{ship.speed} LY/sec
              </div>
              <div>
                <b>Built:</b>{ship.constructionYear}
              </div>
              <div>
                <b>Price:</b><span data-testid="ship-price">{ship.price}</span>
              </div>
            </div>
            <div className={styles.shipData}>
              <b>Payment</b>
              <div>
                <RatesComponent
                    numberOfRates={numberOfRates}
                    setNumberOfRates={setNumberOfRates}
                />
                <div>Pay in {numberOfRates} Rates</div>
              </div>
              <div>
                <b>Monthly Rate: </b>
                <span data-testid="monthly-rate">
              {monthlyRate(ship, numberOfRates).toFixed(2)}
                </span>
              </div>
              <b>Availability</b>
                <span
                  className={'border border-gray-500 rounded-3xl w-[24px] h-[24px] ' + availabilityClass}/>
            </div>
          </div>
          <Clapper
              numberOfClaps={ship.claps ?? 0}
              persistInc={() => persistClapInc(ship.id)}
          />
        </div>
      </div>
    </>
  );
};
