'use client';
export const persistClapInc = async (id: string): Promise<{claps: number}> =>
  Object(await fetch(new Request("http://localhost:3000//api/incClapsForId", {
  method: "POST",
  body: JSON.stringify({ id }),
}))).json();
