export type ShipInYard = {
    "id": string,
    "name": string,
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
    "type": "ship" | "star" | "destroyer",
    "max_atmosphering_speed": string,
    "vehicleCondition": string,
    "constructionYear": number,
    "inStock": number
  };

