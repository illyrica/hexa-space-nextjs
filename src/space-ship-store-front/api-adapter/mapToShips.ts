import { SpaceShip } from "../domain/space-ship";
import { ShipFromCatalogue, ShipInYard } from "./types";

export const mapToDomainSpaceShips = ({
  inYard,
  catalogue,
}: {
  inYard: ShipInYard[];
  catalogue: ShipFromCatalogue[];
}): SpaceShip[] => {
  return inYard.map((ship) => {
    const shipModel = catalogue.find(
      (shipFromCatalogue) => shipFromCatalogue.id == ship.modelId
    );
    return {
      price: ship.creds,
      location: ship.location.name,
      mileage: ship.mileage.number,
      constructionYear: ship.constructionYear,
      image: ship.image,
      name: shipModel?.name || "unknown",
      speed: Number(shipModel?.max_atmosphering_speed),
    };
  });
};
