import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`
    *[_type == "dinners"]
`;

type Data = {
  dinners: Dinner[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dinners: Dinner[] = await sanityClient.fetch(query);
  res.status(200).json({ dinners });
}
