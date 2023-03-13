import { Config, JsonDB } from "node-json-db";

const STORE_FILE = "db/clap-store.json";

const db = new JsonDB(new Config(STORE_FILE, true, true));

export const getClaps = async (): Promise<Record<string, number>> =>
  await db.getData("/");

export const incClapsForId = async (id: string): Promise<number> => {
  const numberOfClaps = ((await getClaps())[id] | 0) + 1;
  await db.push(`/${id}`, numberOfClaps, false);
  return numberOfClaps;
};
