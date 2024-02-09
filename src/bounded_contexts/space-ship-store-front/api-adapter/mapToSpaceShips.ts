import {CatalogueSpaceShip, MileageInLightYears, SpaceShip} from "../domain/space-ship";
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
      (shipFromCatalogue) => shipFromCatalogue.id === ship.catalogId
    );
    return {
      id: ship.id,
      price: ship.creds,
      location: ship.location.name,
      mileage: ship.mileage ? mileageToLightYears(ship.mileage) : undefined,
      constructionYear: ship.constructionYear,
      image: ship.image,
      name: ship.name,
      speed: shipModel ? Number(shipModel.max_atmosphering_speed) : undefined,
      type: shipModel?.type ?? 'ship'
    };
  });
};

export const mapToDomainCatalogueSpaceShips = ({
                                        inYard,
                                        catalogue,
                                      }: {
  inYard: ShipInYard[];
  catalogue: ShipFromCatalogue[];
}): CatalogueSpaceShip[] => {
  return catalogue.map((ship) => {
    const inStock = inYard.filter(
        (shipInYard) => shipInYard.catalogId === ship.id
    ).length;
    return {
      id: ship.id,
      image: ship.image,
      name: ship.name,
      speed: Number(ship.max_atmosphering_speed),
      type: ship.type,
      inStock
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
