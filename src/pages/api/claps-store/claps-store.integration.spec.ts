import { describe } from "vitest";
import { incClapsForId, getClaps } from "./claps-store";

describe("getClaps (integration test)", () => {
  it("should read claps from json", async () => {
    const result = await getClaps();

    expect(Object.entries(result).length).toBeGreaterThan(0);
    expect(result["1234"]).toMatchObject(expect.any(Number));
  });
});

describe("incClapsForSpaceShip", () => {
  it("should write the increased by 1 number to file (integration test)", async () => {
    const numberOfClapsBefore = (await getClaps())["1234"];

    await incClapsForId("1234");

    const numberOfClapsAfter = (await getClaps())["1234"];

    expect(numberOfClapsAfter).toEqual(numberOfClapsBefore + 1);
  });
});
