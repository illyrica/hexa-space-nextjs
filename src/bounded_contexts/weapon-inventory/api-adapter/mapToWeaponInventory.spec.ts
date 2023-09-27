import { mapToWeaponInventory } from "./mapToWeaponInventory";
import { ShipFromCatalogue } from "./types";

describe('mapToWeaponInventory', () => {
  it("should map to weapons", () => {
    const catalogue: ShipFromCatalogue[] =  [{
      "id": "1",
      "name": "X-wing",
      "model": "T-65 X-wing",
      "image": "xwing.jpg",
      "manufacturer": "Incom Corporation",
      "armaments": [
        {
          "name": "Taim & Bak KX9 laser cannons",
          "count": 4
        },
        {
          "name": "Krupx MG7 proton torpedo launchers",
          "count": 2
        }
      ],
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "class": "starfighter",
      "pilots": [],
      "films": [],
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-20T21:23:49.886000Z"
    },
    {
      "id": "2",
      "name": "Foo",
      "model": "Bar",
      "image": "",
      "manufacturer": "",
      "armaments": [
        {
          "name": "Hyper Bomb",
          "count": 2
        },
      ],
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "class": "starfighter",
      "pilots": [],
      "films": [],
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-20T21:23:49.886000Z"
    }]

    const weaponInventory = mapToWeaponInventory(catalogue)
    expect(weaponInventory).toEqual([
      {name: "Taim & Bak KX9 laser cannons"},
      {name: "Krupx MG7 proton torpedo launchers"},
      {name: "Hyper Bomb"},
    ]);
  });
  it("should not contain doubles", () => {
    const catalogue: ShipFromCatalogue[] =  [{
      "id": "1",
      "name": "X-wing",
      "model": "T-65 X-wing",
      "image": "xwing.jpg",
      "manufacturer": "Incom Corporation",
      "armaments": [
        {
          "name": "Taim & Bak KX9 laser cannons",
          "count": 4
        },
        {
          "name": "Krupx MG7 proton torpedo launchers",
          "count": 2
        }
      ],
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "class": "starfighter",
      "pilots": [],
      "films": [],
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-20T21:23:49.886000Z"
    },
    {
      "id": "2",
      "name": "Foo",
      "model": "Bar",
      "image": "",
      "manufacturer": "",
      "armaments": [
        {
          "name": "Taim & Bak KX9 laser cannons",
          "count": 2
        },
      ],
      "cost_in_credits": "149999",
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": "1",
      "passengers": "0",
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "class": "starfighter",
      "pilots": [],
      "films": [],
      "created": "2014-12-12T11:19:05.340000Z",
      "edited": "2014-12-20T21:23:49.886000Z"
    }]

    const weaponInventory = mapToWeaponInventory(catalogue)
    expect(weaponInventory).toEqual([
      {name: "Taim & Bak KX9 laser cannons"},
      {name: "Krupx MG7 proton torpedo launchers"},
    ]);
  });
});