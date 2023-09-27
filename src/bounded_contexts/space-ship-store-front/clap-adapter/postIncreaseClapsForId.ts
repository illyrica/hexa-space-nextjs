import { incClaps } from "../domain/incClaps";

export const postIncreaseClapsForId: incClaps = async (id) =>
  Object(
    await fetch(
      new Request("http://localhost:3000//api/incClapsForId", {
        method: "POST",
        body: JSON.stringify({ id }),
      })
    )
  ).json();
