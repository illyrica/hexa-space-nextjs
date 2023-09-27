import { SpaceShip } from "../domain/space-ship";
import { attachClapsToShips } from "./attachClapsToShips";
import { Claps } from "./claps";

describe('attachClaps', () => {
  it('should attach claps to SpaceShips', () => {
    const claps: Claps = {"27": 88};

    const ships: SpaceShip[] = [{
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      mileage: 3.7,
      speed: 500,
      constructionYear: 3451,
    }];

    expect( attachClapsToShips({claps, ships})).toEqual([{
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      mileage: 3.7,
      speed: 500,
      constructionYear: 3451,
      claps: 88
    }])
  });
});