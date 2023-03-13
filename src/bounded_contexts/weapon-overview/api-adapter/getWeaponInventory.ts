import { getCatalogue } from "./getCatalogue";
import { mapToWeaponInventory } from "./mapToWeaponInventory";

export const getWeaponInventory = async () =>
  mapToWeaponInventory(await getCatalogue());
