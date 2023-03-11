import { describe, vi } from "vitest";
import { END_POINT, getInYard } from "./getInYard";

describe("getInYard", () => {
  it("calls fetch on the API", () => {
    const inYard = [
      {
        creds: 50000,
        location: "Ganymed",
        image: "/ship1.jpg",
        mileage: 1000,
        constructionYear: 3451,
      },
    ];
    const fetchSpy = vi.fn(
      async () => new Response(JSON.stringify({ inYard }))
    );

    getInYard(fetchSpy);
    expect(fetchSpy).toBeCalledWith(END_POINT);
  });

  it("returns json catalogue data", async () => {
    const inYard = [
      {
        creds: 50000,
        location: "Ganymed",
        image: "/ship1.jpg",
        mileage: 1000,
        constructionYear: 3451,
      },
    ];
    const fetchStub = vi.fn(
      async () => new Response(JSON.stringify({ inYard }))
    );
    expect(await getInYard(fetchStub)).toEqual({ inYard });
  });
});
