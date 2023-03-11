import { describe, vi } from "vitest";
import { END_POINT, getCatalogue } from "./getCatalogue";

const exampleShip = {
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

describe("getCatalogue", () => {
  it("calls fetch on the API", () => {
    const ships = [exampleShip];
    const fetchSpy = vi.fn(async () => new Response(JSON.stringify({ ships })));

    getCatalogue(fetchSpy);
    expect(fetchSpy).toBeCalledWith(END_POINT);
  });

  it("returns json catalogue data", async () => {
    const ships = [exampleShip];
    const fetchStub = vi.fn(
      async () => new Response(JSON.stringify({ ships }))
    );
    expect(await getCatalogue(fetchStub)).toEqual({ ships });
  });
});
