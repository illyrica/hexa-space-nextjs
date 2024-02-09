'use client';

import { postIncreaseClapsForId } from "../../bounded_contexts/space-ship-store-front/clap-adapter/postIncreaseClapsForId";
import {CatalogueSpaceShip, SpaceShip} from "@/bounded_contexts/space-ship-store-front/domain/space-ship";
import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";
import {CatalogueShipComponent} from "@/bounded_contexts/space-ship-store-front/ui-adapter/catalogue-ship-component";

export const ShipCatalogue = ({catalogueShips} : {catalogueShips: CatalogueSpaceShip[]}) =>
  <div className="ship-catalogue">
    {catalogueShips.map(ship => <CatalogueShipComponent key={ship.id} ship={ship} />)}
  </div>
