'use client';
import { SpaceShip } from "@/space-ship-store-front/domain/space-ship";
import { ShipComponent } from "@/space-ship-store-front/ui-adapter/ship-component";

const persistClapInc = (id: string) => fetch(new Request("http://localhost:3000//api/incClapsForId", {
  method: "POST",
  body: JSON.stringify({id}),
}));

export const ShipCatalogue = ({shipsWithClaps} : {shipsWithClaps: SpaceShip[]}) =>
  <div className="ship-catalogue">
    {shipsWithClaps.map(ship => <ShipComponent key={ship.id} ship={ship} persistClapInc={persistClapInc} />)}
  </div>

