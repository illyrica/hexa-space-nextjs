import {getInYard} from './getInYard';
import {mapToDomainSpaceShips} from './mapToSpaceShips';

export const getSpaceShips = async ({getInYard_ = getInYard} = {getInYard_ : getInYard})=>{
    return mapToDomainSpaceShips({inYard: await getInYard_()});
}
