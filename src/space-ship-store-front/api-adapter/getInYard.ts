import {ShipInYard} from './types';

export const END_POINT = "/api/getInYard";

export const getInYard = async (fetch_ = fetch) : Promise<ShipInYard[]> => {
  return await (await fetch_(END_POINT)).json();
};
