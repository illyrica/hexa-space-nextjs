export type SpaceShip = {
  id: string;
  inStock: number;
  name: string;
  price: number;
  location: string;
  image: string;
  mileage?: MileageInLightYears;
  speed?: number;
  constructionYear: number;
  claps?: number;
  type: "ship" | "star" | "destroyer"
};

export type MileageInLightYears = number;

const INTEREST_RATE = 1.1;
export const DEFAULT_NUM_OF_MONTH = 12;

export const monthlyRate = (ship: SpaceShip, durationInMonth: number): number =>
  (ship.price / durationInMonth) * (1 + INTEREST_RATE / 12);
