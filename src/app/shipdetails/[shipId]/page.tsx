import {getSpaceShip} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShip";
import {ShipDetailsComponent} from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-details-component";
import {getClaps} from "@/bounded_contexts/space-ship-store-front/api-adapter/getClaps";
import {
  getClapsForShip
} from "@/bounded_contexts/space-ship-store-front/clap-adapter/attachClapsToShips";

export default async function ShipDetailsPage({
  params: {shipId},
}: {
  params: { shipId: string };
}) {
  const ship = await getSpaceShip(shipId)
  const claps = await getClaps();
  const clapsForShip = ship ? getClapsForShip({claps, ship}) : 0;
  return ship && (
    <div>
      <ShipDetailsComponent key={ship.id} ship={ship} claps={clapsForShip}/>
    </div>
  );
}
