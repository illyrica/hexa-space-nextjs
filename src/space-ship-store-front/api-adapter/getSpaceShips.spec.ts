import {describe, vitest} from "vitest";
import {getSpaceShips} from './getSpaceShips';

describe('getSpaceShips', ()=>{

    it('returns spaceship mapped to the domain', async ()=>{
        const getInYardStub = vitest.fn( ()=>Promise.resolve([{
            creds: 50000,
            location: {
                name: "Tatooine",
                rotation_period: "23",
                orbital_period: "304",
                diameter: "10465",
                climate: "arid",
                gravity: "1 standard",
                terrain: "desert",
                surface_water: "1",
                population: "200000",
            },

            fuelType: "hypermatter",
            image: "/xwing2.jpg",
            mileage: {
                number: 111087,
                unit: "km",
            },
            modelId: 123,
            vehicleCondition: "new",
            constructionYear: 3451,
        }]))

        const getCatalogueStub = vitest.fn( ()=>Promise.resolve([{
            id: 123,
            name: "X-wing",
            model: "T-65 X-wing",
            image: "xwing.jpg",
            manufacturer: "Incom Corporation",
            armaments: [],
            cost_in_credits: "149999",
            length: "12.5",
            max_atmosphering_speed: "1050",
            crew: "1",
            passengers: "0",
            cargo_capacity: "110",
            consumables: "1 week",
            hyperdrive_rating: "1.0",
            MGLT: "100",
            class: "starfighter",
            pilots: [],
            created: "2014-12-12T11:19:05.340000Z",
            edited: "2014-12-20T21:23:49.886000Z",
        }]))

        const result = await getSpaceShips({getInYard_: getInYardStub , getCatalogue_: getCatalogueStub })

        expect(result).toEqual([{
            name: "X-wing",
            price: 50000,
            location: "Tatooine",
            image: "/xwing2.jpg",
            mileage: 111087,
            speed: 1050,
            constructionYear: 3451,
        },])
    })

})
