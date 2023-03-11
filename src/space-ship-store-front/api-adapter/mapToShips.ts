import { SpaceShip } from "../domain/space-ship";
import { ShipFromCatalogue, ShipInYard } from "./types";

export const mapToDomainSpaceShips = ({
  inYard,
  catalogue,
}: {
  inYard: ShipInYard[];
  catalogue: ShipFromCatalogue[];
}): SpaceShip[] => {
  return inYard.map((ship) => ({
    price: ship.creds,
    location: ship.location.name,
    mileage: ship.mileage.number,
    constructionYear: ship.constructionYear,
    image: ship.image,
    name: "X-wing",
    speed: 500,
  }));
};
