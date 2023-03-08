export const END_POINT = "/api/catalogue";
export const getCatalogue = async (fetch_ = fetch) => {
  return await (await fetch_(END_POINT)).json();
};
