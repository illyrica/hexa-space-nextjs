import {MileageInLightYears, SpaceShip} from "../domain/space-ship";
import {ShipFromCatalogue, ShipInYard} from "./types";

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
      mileage: ship.mileage ? mileageToLightYears(ship.mileage) : undefined,
      constructionYear: ship.constructionYear,
      image: ship.image,
      name: shipModel?.name || "unknown",
      speed: shipModel ? Number(shipModel.max_atmosphering_speed) : undefined,
    };
  });
};

export const miToRoundedLightYears = (miles: number) : number => {
 return Math.round(0.00000000000017011 * miles * 10) / 10
}

export const kmToRoundedLightYears = (kilometers: number) : number => {
  return Math.round(0.00000000000010570 * kilometers * 10) / 10
}

export const mileageToLightYears = ({number, unit}: {number: number, unit: string}) : MileageInLightYears | undefined =>
{
switch (unit){
  case "km":
    return kmToRoundedLightYears(number)
  case "miles":
  case "mi":
    return miToRoundedLightYears(number)
  case "light years":
    return number
  default:
    return undefined
}
}
