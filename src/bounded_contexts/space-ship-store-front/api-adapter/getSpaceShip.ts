import {getInYard} from "@/bounded_contexts/space-ship-store-front/api-adapter/getInYard";
import {getCatalogue} from "@/bounded_contexts/space-ship-store-front/api-adapter/getCatalogue";
import {mapToDomainSpaceShips} from "@/bounded_contexts/space-ship-store-front/api-adapter/mapToSpaceShips";

export const getSpaceShip = async (shipId:string)=>{
    const [inYard, catalogue ] = await Promise.all([getInYard(), getCatalogue()])

    return mapToDomainSpaceShips({inYard, catalogue}).find(({id})=> shipId === id)
}
