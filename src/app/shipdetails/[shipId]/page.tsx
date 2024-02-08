import {getSpaceShip} from "@/bounded_contexts/space-ship-store-front/api-adapter/getSpaceShip";
import ShipDetails from "@/app/shipdetails/[shipId]/ship-details";

export default async function ShipDetailsPage({
  params: {shipId},
}: {
  params: { shipId: string };
}) {
  const ship = await getSpaceShip(shipId)
  return ship && (
    <main>
        <ShipDetails ship={ship} />
    </main>
  );
}
