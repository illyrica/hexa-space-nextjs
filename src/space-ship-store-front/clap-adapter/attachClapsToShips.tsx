import { SpaceShip } from "../domain/space-ship";
import { Clap } from "./clap";

export const attachClapsToShips = ({claps, ships}: {claps: Clap[], ships: SpaceShip[]}) =>
  ships.map((ship) => (
    {...ship, claps: claps.find(clap => (ship.id === clap.shipId))?.claps ?? 0 }
  ))