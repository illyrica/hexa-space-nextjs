import { describe } from "vitest";
import { mapToDomainSpaceShips } from "./mapToShips";
import { ShipFromCatalogue, ShipInYard } from "./types";

const exampleShipModellFromApi: ShipFromCatalogue = {
  id: 123,
  name: "X-wing",
  model: "T-65 X-wing",
  image: "xwing.jpg",
  manufacturer: "Incom Corporation",
  armaments: [],
  cost_in_credits: "149999",
  length: "12.5",
  max_atmosphering_speed: "1050",
  crew: "1",
  passengers: "0",
  cargo_capacity: "110",
  consumables: "1 week",
  hyperdrive_rating: "1.0",
  MGLT: "100",
  class: "starfighter",
  pilots: [],
  created: "2014-12-12T11:19:05.340000Z",
  edited: "2014-12-20T21:23:49.886000Z",
};

const exampleShipInYardFromApi: ShipInYard = {
  creds: 50000,
  location: {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
  },

  fuelType: "hypermatter",
  image: "/xwing2.jpg",
  mileage: {
    number: 111087,
    unit: "km",
  },
  modelId: 123,
  vehicleCondition: "new",
  constructionYear: 3451,
};

describe("mapToDomainSpaceShips", () => {
  it("should map the raw data from REST-Requests to Ships from the Domain", () => {
    const result = mapToDomainSpaceShips({
      inYard: [exampleShipInYardFromApi],
      catalogue: [exampleShipModellFromApi],
    });

    expect(result).toEqual([
      {
        name: "X-wing",
        price: 50000,
        location: "Tatooine",
        image: "/xwing2.jpg",
        mileage: 111087,
        speed: 1050,
        constructionYear: 3451,
      },
    ]);
  });

  it("should map a ship that is not in the catalogue to the default name 'unknown'", () => {
    const result = mapToDomainSpaceShips({
      inYard: [exampleShipInYardFromApi],
      catalogue: [],
    });

    expect(result[0].name).toEqual("unknown");
  });

  it("should map a ship that is not in the catalogue to ship without speed", () => {
    const result = mapToDomainSpaceShips({
      inYard: [exampleShipInYardFromApi],
      catalogue: [],
    });

    expect(result[0].speed).not.toBeDefined();
  });
});
