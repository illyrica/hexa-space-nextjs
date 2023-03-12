'use client';
export const persistClapInc = (id: string) => fetch(new Request("http://localhost:3000//api/incClapsForId", {
  method: "POST",
  body: JSON.stringify({ id }),
}));
