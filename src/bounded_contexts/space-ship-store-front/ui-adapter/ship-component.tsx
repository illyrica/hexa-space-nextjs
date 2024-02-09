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
import {useRouter} from "next/navigation";

export const ShipComponent = ({
  ship,
  persistClapInc,
}: {
  ship: SpaceShip;
  persistClapInc: incClaps;
}) => {
  const router = useRouter()
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  return (
    <>
      <div className={styles.ship} onClick={()=>router.push("shipdetails/"+ ship.id)}>
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
          <div className="flex-column">
            <b>Price:</b><span data-testid="ship-price">{ship.price}</span>
          </div>
          <div className="flex-column">
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


          <Clapper
              numberOfClaps={ship.claps ?? 0}
              persistInc={() => persistClapInc(ship.id)}
          />
        </div>
      </div>
    </>
  );
};
