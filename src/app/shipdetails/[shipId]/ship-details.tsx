'use client';

import {SpaceShip} from "@/bounded_contexts/space-ship-store-front/domain/space-ship";
import {postIncreaseClapsForId} from "@/bounded_contexts/space-ship-store-front/clap-adapter/postIncreaseClapsForId";
import {ShipDetailsComponent} from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship-details-component";
import styles from "@/bounded_contexts/space-ship-store-front/ui-adapter/ship.module.css";

const ShipDetails = ({ship}: { ship: SpaceShip }) => {
    return (<>
        <div className={styles.main}>
            <ShipDetailsComponent key={ship.id} ship={ship} persistClapInc={postIncreaseClapsForId}/>
        </div>
    </>);
}

export default ShipDetails;
