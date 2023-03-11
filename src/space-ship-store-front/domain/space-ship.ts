export type SpaceShip = {
  name: string;
  price: number;
  location: string;
  image: string;
  mileage?: MileageInLightYears;
  speed?: number;
  constructionYear: number;
};

export type MileageInLightYears = number

export const monthlyRate = (ship: SpaceShip, durationInMonth: number): number =>
  (ship.price / durationInMonth) * 1.1;
