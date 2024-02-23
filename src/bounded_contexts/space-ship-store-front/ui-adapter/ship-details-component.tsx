"use client";
import styles from "./ship.module.css";

import Image from "next/image";
import { useState } from "react";
import {
  DEFAULT_NUM_OF_MONTH,
  monthlyRate,
  SpaceShip,
} from "../domain/space-ship";
import { Clapper } from "./clapper";
import { RatesComponent } from "./rates-component";
import {postIncreaseClapsForId} from "@/bounded_contexts/space-ship-store-front/clap-adapter/postIncreaseClapsForId";

export const ShipDetailsComponent = ({
    ship,
    claps
}: {
  ship: SpaceShip;
  claps: number;
}) => {
  const [numberOfRates, setNumberOfRates] = useState(DEFAULT_NUM_OF_MONTH);
  const availabilityClass = ship.inStock > 0 ? (ship.inStock > 5 ? "bg-green-500" : "bg-yellow-500") : "bg-red-500"
  return (
    <>
      <div className="flex flex-col mt-8 items-center gap-8 w-full text-[#858585]">
        <div className="text-2xl underline">{ship.name}</div>
        <div className="flex flex-nowrap w-full gap-8 my-4 justify-center">
            <Image
                src={`/images${ship.image}`}
                height={300}
                width={300}
                alt="{Bild}"
                priority
            />
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-8">
              <div className={styles.shipData}>
                <span className="font-bold">Data</span>
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
                <div>
                  <b>Availability</b>
                  <span
                      className={'border border-gray-500 rounded-3xl w-[24px] h-[24px] ' + availabilityClass}/>
                </div>
              </div>
              <div className={styles.shipData}>
                <span className="font-bold">Payment</span>
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
              </div>
            </div>
            <Clapper
                numberOfClaps={claps}
                persistInc={() => postIncreaseClapsForId(ship.id)}
            />
          </div>


        </div>
      </div>
    </>
  );
};
