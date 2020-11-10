// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({ data });
};
