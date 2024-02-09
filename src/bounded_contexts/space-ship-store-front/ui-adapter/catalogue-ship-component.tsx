"use client";
import styles from "./ship.module.css";

import Image from "next/image";
import {
  CatalogueSpaceShip,
} from "../domain/space-ship";

export const CatalogueShipComponent = ({
  ship,
}: {
  ship: CatalogueSpaceShip;
}) => {
  console.log("ship.image",ship.image)
  return (
    <>
      <div className={styles.ship} >
        <div>
          <p>{ship.name}</p>
          <Image
            src={`/images/${ship.image}`}
            height={256}
            width={256}
            alt="{Bild}"
            priority
          />
        <div>In Stock: {ship.inStock}</div>
        </div>
      </div>
    </>
  );
};
