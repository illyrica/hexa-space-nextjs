import {SpaceShip} from "../domain/space-ship";
import {ShipFromCatalogue, ShipInYard} from "./types";

export const mapToDomainSpaceShips = ({
  inYard,
  catalogue,
}: {
  inYard: ShipInYard[];
  catalogue: ShipFromCatalogue[];
}): SpaceShip[] => {


  return [
    {
      name: "X-wing",
      price: 50000,
      location: "Tatooine",
      image: "/xwing.jpg",
      mileage: 111087,
      speed: 500,
      constructionYear: 3451,
    },
  ];
};
