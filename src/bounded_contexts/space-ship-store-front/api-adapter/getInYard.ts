import { log } from "console";
import { ShipInYard } from "./types";

const cacheBuster = () => new Date().getTime();

export const END_POINT = "http://localhost:3000/api/inYard?" + cacheBuster();

export const getInYard = async (fetch_ = fetch): Promise<ShipInYard[]> => {
  return await (await fetch_(END_POINT)).json();
};
