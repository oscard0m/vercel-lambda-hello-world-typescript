import type { VercelRequest, VercelResponse } from "@vercel/node";
import { name } from "../src/name";

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(`Hello ${name}!`);
};
