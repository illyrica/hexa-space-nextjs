export type SpaceShip = {
  name: string;
  price: number;
  location: string;
  image: string;
  mileage: number;
  speed?: number;
  constructionYear: number;
};

export const monthlyRate = (ship: SpaceShip, durationInMonth: number): number =>
  (ship.price / durationInMonth) * 1.1;
