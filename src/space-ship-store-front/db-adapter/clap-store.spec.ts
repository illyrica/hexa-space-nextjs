import { describe } from "vitest";
import { getClaps } from "./claps-store";

describe("getClaps (integration test)", () => {
  it("should read claps from json", () => {
    const result = getClaps();

    expect(result.length).toBeGreaterThan(1);

    expect(result[0]).toMatchObject({
      shipId: expect.any(Number),
      claps: expect.any(Number),
    });
  });
});
