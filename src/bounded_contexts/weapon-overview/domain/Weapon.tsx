import { SpaceShip } from "./SpaceShip"

export type Weapon = {
  name: string,
  inStock?: number
  mountedOn?: [{ship: SpaceShip, count: number}]
}