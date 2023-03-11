export const END_POINT = "/api/getInYard";

export const getInYard = async (fetch_ = fetch) => {
  return await (await fetch_(END_POINT)).json();
};
