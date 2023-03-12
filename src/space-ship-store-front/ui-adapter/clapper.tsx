"use client";
import { useState } from 'react';


export const  Clapper = ({numberOfClaps, persistClapInc}: {numberOfClaps: number, persistClapInc: () => Promise<{claps: number}>}) => {
  const [claps, setClaps] = useState(numberOfClaps)

  return <>
      <div className="clapper">
        <button
          style={{margin: 10}}
          onClick={async () => setClaps((await (await persistClapInc()).claps)) }
        >
          <img src="images/clap.png" style={{height: 40, width: 40, border: "none"}}/>
        </button>
        <span className="number-of-claps" style={{marginLeft: 20, marginTop: 20}}>{claps}</span>
      </div>
  </>
}