import { SpaceShip } from '@/ship-list/domain/space-ship';
import { render, screen } from '@testing-library/react';
import { it, describe, expect } from "vitest";
import '@testing-library/jest-dom/extend-expect'

import {ShipComponent} from './ship-component';

describe('Ship', () => {
  it('renders price', () => {
    const ship: SpaceShip = {
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      mileage: 1000,
      speed: 500,
      constructionYear: 3451,
    };

    const {getByTestId} = render(<ShipComponent ship={ship}/>);

    // screen.debug();

    expect(getByTestId("ship-price")).toHaveTextContent("50000")
  });
});