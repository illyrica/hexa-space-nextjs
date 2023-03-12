'use client';

import { postIncreaseClapsForId } from "@/bounded_contexts/space-ship-store-front/api-adapter/postIncreaseClapsForId";
import { SpaceShip } from "@/bounded_contexts/space-ship-store-front/domain/space-ship";
import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";

export const ShipCatalogue = ({shipsWithClaps} : {shipsWithClaps: SpaceShip[]}) =>
  <div className="ship-catalogue">
    {shipsWithClaps.map(ship => <ShipComponent key={ship.id} ship={ship} persistClapInc={postIncreaseClapsForId} />)}
  </div>