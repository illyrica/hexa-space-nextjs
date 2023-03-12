// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { incClapsForId } from "@/space-ship-store-front/db-adapter/claps-store";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  incClapsForId(JSON.parse(req.body).id);

  res.status(200).json(1);
}
