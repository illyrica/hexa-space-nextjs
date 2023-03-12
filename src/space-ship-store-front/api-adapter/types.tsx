export type ShipInYard = {
    "id": string,
    "creds": number,
    "fuelType": string,
    "image": string,
    "mileage" ?: {
      "value": number,
      "unit": string
    },
    "location": {
      "name": string,
      "rotation_period": string,
      "orbital_period": string,
      "diameter": string,
      "climate": string,
      "gravity": string,
      "terrain": string,
      "surface_water": string,
      "population": string
    },
    "modelId": number,
    "vehicleCondition": string,
    "constructionYear": number
  };

export type ShipFromCatalogue = {
  "id": number
  "name": string,
  "model": string,
  "image": string,
  "manufacturer": string,
  "armaments":
    {
      "name": string,
      "count": number
    }[],
  "cost_in_credits": string,
  "length": string,
  "max_atmosphering_speed": string,
  "crew": string,
  "passengers": string,
  "cargo_capacity": string,
  "consumables": string,
  "hyperdrive_rating": string,
  "MGLT": string,
  "class": string,
  "pilots"?:
    {
      "name": string,
      "height": string,
      "mass": string,
      "hair_color": string,
      "skin_color": string,
      "eye_color": string,
      "birth_year": string,
      "gender": string
    }[],
  "films"?:
    {
      "title": string,
      "episode_id": number,
      "opening_crawl": string,
      "director": string,
      "producer": string,
      "release_date": string
    }[],
  "created": string
  "edited": string
};
