"use client";
// import * as R from "ramda";
// import inc from "ramda/es/inc";
import { useState } from 'react';


export const  Clapper = () => {
  const [claps, setClaps] = useState(0)
  // const myInc = async () => (await import(/* webpackChunkName: "myRamda" */'ramda')).inc
  // myInc()


  return <>
      <h3 style={{marginLeft: 20, marginTop: 20}}>{claps}</h3>

      <button
        style={{margin: 10}}
        // onMouseOver={ async () => myInc()}
        // onClick={ async () => setClaps((await myInc())(claps)) }
        onClick={() => setClaps( claps + 1) }
      >
        <img src="images/clap.png" style={{height: 40, width: 40, border: "none"}}/>
      </button>
  </>
}