import { MileageInLightYears, SpaceShip} from "../domain/space-ship";
import { ShipInYard } from "./types";

export const mapToDomainSpaceShips = ({
  inYard,
}: {
  inYard: ShipInYard[];
}): SpaceShip[] => {
  return inYard.map((ship) => {
    return {
      id: ship.id,
      inStock: ship.inStock,
      price: ship.creds,
      location: ship.location.name,
      mileage: ship.mileage ? mileageToLightYears(ship.mileage) : undefined,
      constructionYear: ship.constructionYear,
      image: ship.image,
      name: ship.name,
      speed: Number(ship.max_atmosphering_speed),
      type: ship.type
    };
  });
};

export const miToRoundedLightYears = (miles: number): number => {
  return Math.round(0.00000000000017011 * miles * 10) / 10;
};

export const kmToRoundedLightYears = (kilometers: number): number => {
  return Math.round(0.0000000000001057 * kilometers * 10) / 10;
};

const identity = (v: number) => v;

export const mileageToLightYears = ({
  value,
  unit,
}: {
  value: number;
  unit: string;
}): MileageInLightYears | undefined => {
  const calc: typeof kmToRoundedLightYears | undefined = {
    km: kmToRoundedLightYears,
    miles: miToRoundedLightYears,
    mi: miToRoundedLightYears,
    "light years": identity,
  }[unit];

  return calc ? calc(value) : undefined;
};
