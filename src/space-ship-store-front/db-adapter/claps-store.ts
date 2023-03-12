import { Config, JsonDB } from "node-json-db";

const STORE_FILE = "clap-store.json";

const db = new JsonDB(new Config(STORE_FILE, true, true));

export const getClaps = async (): Promise<Record<string, number>> =>
  await db.getData("/");

export const incClapsForId = async (id: string) => {
  const value = (await getClaps())[id];
  await db.push(`/${id}`, value + 1, false);
};
