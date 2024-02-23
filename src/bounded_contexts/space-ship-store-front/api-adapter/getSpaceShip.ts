import {getInYard} from "@/bounded_contexts/space-ship-store-front/api-adapter/getInYard";
import {mapToDomainSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/mapToSpaceShips";

export const getSpaceShip = async (shipId:string)=>{
    const inYard = await getInYard();

    return mapToDomainSpaceShips({inYard}).find(({id})=> shipId === id);
}
