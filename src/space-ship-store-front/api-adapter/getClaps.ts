import { Claps } from "../clap-adapter/claps";
import { ShipInYard } from "./types";

export const END_POINT = "http://localhost:3000/api/claps";

export const getClaps = async (fetch_ = fetch): Promise<Claps> => {
  return await (await fetch_(END_POINT)).json();
};
