import {ShipFromCatalogue} from './types';

export const END_POINT = "/api/catalogue";
export const getCatalogue = async (fetch_ = fetch) : Promise<ShipFromCatalogue[]> => {
  return await (await fetch_(END_POINT)).json();
};
