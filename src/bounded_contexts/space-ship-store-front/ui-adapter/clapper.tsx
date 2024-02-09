"use client";
import { useState } from "react";

export const Clapper = ({
  numberOfClaps,
  persistInc,
}: {
  numberOfClaps: number;
  persistInc: () => Promise<{ claps: number }>;
}) => {
  const [claps, setClaps] = useState(numberOfClaps);

  return (
    <>
      <div className="clapper">
        <div
          style={{ margin: 10 }}
          onClick={async (e) => {
            e.stopPropagation();
            setClaps(await (await persistInc()).claps);
          }}
        >
          <img
            src="images/clap.png"
            style={{ height: 40, width: 40, border: "none" }}
          />
        </div>
        <span
          className="number-of-claps"
        >
          {claps}
        </span>
      </div>
    </>
  );
};
