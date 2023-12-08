import { ShipComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-component";
import { ShipDetailsComponent } from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-details-component";
import Link from "next/link";
import styles from "./shipdetails.module.css";

export default async function ShipDetails({
  params,
}: {
  params: { shipId: string };
}) {
  return (
    <main>
      <h1>Foo {params.shipId}</h1>
    </main>
  );
}
