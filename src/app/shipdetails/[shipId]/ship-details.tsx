'use client';

import {SpaceShip} from "@/bounded_contexts/space-ship-store-front/domain/space-ship";
import {postIncreaseClapsForId} from "@/bounded_contexts/space-ship-store-front/api-adapter/postIncreaseClapsForId";
import {ShipDetailsComponent} from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-details-component";

const ShipDetails = ({ship}: { ship: SpaceShip }) => {
    return (<>
        <ShipDetailsComponent key={ship.id} ship={ship} persistClapInc={postIncreaseClapsForId}/>
    </>);
}

export default ShipDetails;