import { it, describe, expect } from "vitest";
import { monthlyRate, SpaceShip } from "./space-ship";

describe("SpaceShip.monthlyRate", () => {
  it("should calc the monthly Rate for 10 month with a 10% interest rate", () => {
    const ship: SpaceShip = {
      name: "Foo",
      price: 50_000,
      location: "string",
      image: "string",
      mileage: 1,
      speed: 1,
      constructionYear: 1,
    };
    expect(monthlyRate(ship, 10)).toEqual(5500);
  });
});
