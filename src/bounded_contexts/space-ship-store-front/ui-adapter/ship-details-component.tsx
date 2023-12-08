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
        <div className="ship-data">
          <div>
            <b>Location</b>: {ship.location}
          </div>
          {ship.mileage && (
            <div>
              <b>Mileage (ly)</b>:{" "}
              <span data-testid="ship-mileage"> {ship.mileage}</span>
            </div>
          )}
          <div>
            <b>Speed</b>: {ship.speed} LY/sec
          </div>
          <div>
            <b>Built</b>: {ship.constructionYear}
          </div>
          <div>
            <b>Price</b>:<span data-testid="ship-price"> {ship.price}</span>
            <br />
          </div>

          <div>
            <br />
            <RatesComponent
              numberOfRates={numberOfRates}
              setNumberOfRates={setNumberOfRates}
            />
            <br />
            <div>Pay in {numberOfRates} Rates</div>
          </div>
          <div>
            <b>Monthly Rate</b>:
            <span data-testid="monthly-rate">
              {" "}
              {monthlyRate(ship, numberOfRates).toFixed(2)}
            </span>
          </div>

          <Clapper
            numberOfClaps={ship.claps ?? 0}
            persistInc={() => persistClapInc(ship.id)}
          />
          {/*
        Example for a styled sales label!
      <div>
        <div className="sales-label"><span >Sale</span></div>
      </div>
      */}
        </div>
      </div>
    </>
  );
};
