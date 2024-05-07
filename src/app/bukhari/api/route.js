import { BUKHARI } from "../bukhariData";

export const GET = async () => {
  return Response.json(BUKHARI);
};
