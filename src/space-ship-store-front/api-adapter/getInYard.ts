import {ShipInYard} from './types';

export const END_POINT = "http://localhost:3000/api/inYard";

export const getInYard = async (fetch_ = fetch) : Promise<ShipInYard[]> => {
  return await (await fetch_(END_POINT)).json();
};
