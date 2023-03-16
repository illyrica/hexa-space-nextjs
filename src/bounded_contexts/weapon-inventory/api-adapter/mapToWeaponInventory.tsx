import * as R from "remeda"
import { Weapon } from "../domain/Weapon";
import { ShipFromCatalogue } from "./types";

export const mapToWeaponInventory: (catalogue: ShipFromCatalogue[]) => Weapon[] =
  R.createPipe(
    R.flatMap(R.prop("armaments")),
    R.map(R.pick(["name"])),
    R.uniqBy(R.prop("name"))
  )
