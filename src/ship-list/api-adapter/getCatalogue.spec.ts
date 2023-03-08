import { describe, vi } from "vitest";
import { END_POINT, getCatalogue } from "./getCatalogue";

describe("getCatalogue", () => {
  it("calls fetch on the API", () => {
    const ships = [
      {
        name: "XV-1 Turbo Alpha",
        image: "/ship1.jpg",
        speed: 500,
        constructionYear: 3451,
      },
    ];
    const fetchSpy = vi.fn(async () => new Response(JSON.stringify({ ships })));

    getCatalogue(fetchSpy);
    expect(fetchSpy).toBeCalledWith(END_POINT);
  });

  it("returns json catalogue data", async () => {
    const ships = [
      {
        name: "XV-1 Turbo Alpha",
        image: "/ship1.jpg",
        speed: 500,
        constructionYear: 3451,
      },
    ];
    const fetchStub = vi.fn(
      async () => new Response(JSON.stringify({ ships }))
    );
    expect(await getCatalogue(fetchStub)).toEqual({ ships });
  });
});
