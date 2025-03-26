import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SpaceShip } from "../domain/space-ship";
import { ShipComponent } from "./ship-component";

const spaceShipWorth50000: SpaceShip = {
  id: "27",
  name: "XV-1 Turbo Alpha",
  price: 50_000,
  location: "Ganymed",
  image: "/ship1.jpg",
  mileage: 1000,
  speed: 500,
  constructionYear: 3451,
};

const aSpaceShip: SpaceShip = {
  id: "27",
  name: "XV-1 Turbo Alpha",
  price: 10000,
  location: "Ganymed",
  image: "/ship1.jpg",
  mileage: 1000,
  speed: 500,
  constructionYear: 3451,
};

describe("Ship", () => {
  it("renders price", () => {
    const { getByTestId } = render(<ShipComponent ship={spaceShipWorth50000} persistClapInc={vi.fn()} />);
    // screen.debug();
    expect(getByTestId("ship-price")).toHaveTextContent("50000");
  });

  it("renders mileage", () => {
    const ship: SpaceShip = {
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      mileage: 3.7,
      speed: 500,
      constructionYear: 3451,
    };

    const { getByTestId } = render(<ShipComponent ship={ship} persistClapInc={vi.fn()} />);
    // screen.debug();
    expect(getByTestId("ship-mileage")).toHaveTextContent("3.7");
  });

  it("renders no mileage for ships that do not have mileage", () => {
    const shipWithoutMillage: SpaceShip = {
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      speed: 500,
      constructionYear: 3451,
    };

    const { queryByTestId } = render(<ShipComponent ship={shipWithoutMillage} persistClapInc={vi.fn()} />);
    expect(queryByTestId("ship-mileage")).not.toBeInTheDocument();
  });
  it("renders no mileage for ships that do not have mileage", () => {
    const shipWithoutMillage: SpaceShip = {
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      speed: 500,
      constructionYear: 3451,
    };

    const { queryByTestId } = render(<ShipComponent ship={shipWithoutMillage} persistClapInc={vi.fn()} />);
    expect(queryByTestId("ship-mileage")).not.toBeInTheDocument();
  });
  it("renders no speed for ships that do not have speed", () => {
    const shipWithoutSpeed: SpaceShip = {
      id: "27",
      name: "XV-1 Turbo Alpha",
      price: 50_000,
      location: "Ganymed",
      image: "/ship1.jpg",
      constructionYear: 3451,
    };

    const { queryByTestId } = render(<ShipComponent ship={shipWithoutSpeed} persistClapInc={vi.fn()} />);
    expect(queryByTestId("ship-speed")).not.toBeInTheDocument();
  });
});

describe("Monthly Rates", () => {
  it("defaults to 12", () => {
    const { queryByTestId } = render(<ShipComponent ship={aSpaceShip} persistClapInc={vi.fn()} />);
    expect(queryByTestId("number-of-rates")).toHaveValue("12");
  });

  it("can be changed", () => {
    const { getByTestId } = render(<ShipComponent ship={aSpaceShip} persistClapInc={vi.fn()} />);
    const rateSlider = getByTestId("number-of-rates");
    fireEvent.change(rateSlider, { target: { value: 8 } });
    expect(rateSlider).toHaveValue("8");
  });

  it("adapts the Monthly Rate to Pay on changing the number of rates", async () => {
    const { getByTestId } = render(<ShipComponent ship={spaceShipWorth50000} persistClapInc={vi.fn()} />);
    const rateSlider = getByTestId("number-of-rates");

    const oldRate = Number(getByTestId("monthly-rate").innerHTML);
    await act(() => fireEvent.change(rateSlider, { target: { value: 2 } }));
    const newRate = Number(getByTestId("monthly-rate").innerHTML);

    expect(newRate).toBeGreaterThan(oldRate);
  });
});
