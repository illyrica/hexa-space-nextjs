import styles from "./rates.module.css";

export const RatesComponent = ({
  numberOfRates,
  setNumberOfRates,
}: {
  numberOfRates: number;
  setNumberOfRates: (rates: number) => void;
}) => (
  <input
    className={styles.rates}
    data-testid="number-of-rates"
    type="range"
    id="rates"
    name="rates"
    min="2"
    max="24"
    value={numberOfRates}
    onChange={(e) => setNumberOfRates(Number(e.target.value))}
  />
);
