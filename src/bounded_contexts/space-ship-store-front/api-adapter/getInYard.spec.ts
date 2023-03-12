import { describe, vi } from "vitest";
import { END_POINT, getInYard } from "./getInYard";
import { ShipInYard } from "./types";

const example: ShipInYard = {
  id: "29",
  creds: 50000,
  fuelType: "hypermatter",
  image: "/xwing2.jpg",
  modelId: "1",
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
  mileage: {
    value: 111087,
    unit: "km",
  },
  vehicleCondition: "new",
  constructionYear: 3451,
};

describe("getInYard", () => {
  it("calls fetch on the API", () => {
    const inYard = [example];
    const fetchSpy = vi.fn(
      async () => new Response(JSON.stringify({ inYard }))
    );

    getInYard(fetchSpy);
    expect(fetchSpy).toBeCalledWith(END_POINT);
  });

  it("returns json catalogue data", async () => {
    const inYard = [example];
    const fetchStub = vi.fn(
      async () => new Response(JSON.stringify({ inYard }))
    );
    expect(await getInYard(fetchStub)).toEqual({ inYard });
  });
});
