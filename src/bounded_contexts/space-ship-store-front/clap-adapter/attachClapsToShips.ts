import { SpaceShip } from "../domain/space-ship";
import { Claps } from "./claps";

export const attachClapsToShips = ({claps, ships}: {claps: Claps, ships: SpaceShip[]}) =>{
  return ships.map((ship) => (
    {...ship, claps: claps[ship.id] ?? 0 }
  ))}

export const getClapsForShip = ({claps, ship}: {claps: Claps, ship: SpaceShip}) =>{
  return claps[ship.id] ?? 0}
