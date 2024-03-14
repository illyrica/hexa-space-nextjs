import ships from "@db/ships.json";

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

export const getSpaceShips = async ()=>{
    return loadShips().map(ship => mapShip(ship));
};

export const getSpaceShip = async (shipId:string) => {
    const shipInYard = loadShips().find(({id})=> shipId === id);
    return shipInYard ? mapShip(shipInYard) : undefined;
}

const INTEREST_RATE = 1.1;
export const DEFAULT_NUM_OF_MONTH = 12;

export const monthlyRate = (ship: SpaceShip, durationInMonth: number): number =>
    (ship.price / durationInMonth) * (1 + INTEREST_RATE / 12);

const miToRoundedLightYears = (miles: number): number => {
    return Math.round(0.00000000000017011 * miles * 10) / 10;
};

const kmToRoundedLightYears = (kilometers: number): number => {
    return Math.round(0.0000000000001057 * kilometers * 10) / 10;
};

const identity = (v: number) => v;

const mileageToLightYears = ({
                                        value,
                                        unit,
                                    }: {
    value: number;
    unit: string;
}): MileageInLightYears | undefined => {
    const calc: typeof kmToRoundedLightYears | undefined = {
        km: kmToRoundedLightYears,
        miles: miToRoundedLightYears,
        mi: miToRoundedLightYears,
        "light years": identity,
    }[unit];

    return calc ? calc(value) : undefined;
};

const loadShips = () => (ships.inYard as unknown as ShipInYard[]);

const mapShip = (ship: ShipInYard) => {
    return {
        id: ship.id,
        inStock: ship.inStock,
        price: ship.creds,
        location: ship.location.name,
        mileage: ship.mileage ? mileageToLightYears(ship.mileage) : undefined,
        constructionYear: ship.constructionYear,
        image: ship.image,
        name: ship.name,
        speed: Number(ship.max_atmosphering_speed),
        type: ship.type
    };
};

type ShipInYard = {
    "id": string,
    "name": string,
    "creds": number,
    "fuelType": string,
    "image": string,
    "mileage" ?: {
        "value": number,
        "unit": string
    },
    "location": {
        "name": string,
        "rotation_period": string,
        "orbital_period": string,
        "diameter": string,
        "climate": string,
        "gravity": string,
        "terrain": string,
        "surface_water": string,
        "population": string
    },
    "type": "ship" | "star" | "destroyer",
    "max_atmosphering_speed": string,
    "vehicleCondition": string,
    "constructionYear": number,
    "inStock": number
};


