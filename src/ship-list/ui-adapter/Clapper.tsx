"use client";
// import * as R from "ramda";
// import inc from "ramda/es/inc";
import { useState } from 'react';


export const  Clapper = () => {
  const [claps, setClaps] = useState(0)
  const myInc = async () => (await import(/* webpackChunkName: "myRamda" */'ramda')).inc

  myInc()

  return <>
      <p>{claps}</p>

      <button
        // onMouseOver={ async () => myInc()}
        onClick={ async () => setClaps((await myInc())(claps)) }
      >
        Clap
      </button>
  </>
}