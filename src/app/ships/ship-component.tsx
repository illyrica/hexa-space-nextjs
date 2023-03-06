import { SpaceShip } from '@/domain/space-ship';
import Image from 'next/image';
import ship1 from "../../../public/images/ship1.jpeg"

export const ShipComponent = ({ship}: {ship: SpaceShip}) => <>
  <div className="ship">
  <div>
    <Image
      src={ship1}
      height={200}
      width={300}
      alt="Space Ship 1"
    />
    <p>Ship Alpha-1</p>
  </div>
  <ul className="ship-data">
    <li><b>Price</b>:
      <span data-testid="ship-price">{ship.price}</span>
    </li>
    <li><b>Location</b>: string</li>
    <li><b>Mileage</b>: number</li>
    <li><b>Speed</b>: number LY/sec</li>
    <li><b>Built</b>: number</li>
  </ul>
  </div>
</>