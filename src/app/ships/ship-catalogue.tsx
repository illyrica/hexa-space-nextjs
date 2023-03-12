'use client';
import { SpaceShip } from "@/space-ship-store-front/domain/space-ship";
import { ShipComponent } from "@/space-ship-store-front/ui-adapter/ship-component";
import { persistClapInc } from "../../space-ship-store-front/api-adapter/persistClapInc";

export const ShipCatalogue = ({shipsWithClaps} : {shipsWithClaps: SpaceShip[]}) =>
  <div className="ship-catalogue">
    {shipsWithClaps.map(ship => <ShipComponent key={ship.id} ship={ship} persistClapInc={persistClapInc} />)}
  </div>

