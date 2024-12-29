import type { endoflifePostmarketosRoute } from "./route";
import type { GetPostmarketosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePostmarketosHandler: RouteHandler<
  typeof endoflifePostmarketosRoute
> = async (c) => {
  const postmarketosInfoResponse = await fetch(
    "https://endoflife.date/api/postmarketos.json",
  );
  const postmarketosInfo = (await postmarketosInfoResponse.json()) as z.infer<
    typeof GetPostmarketosResponse200Schema
  >;
  return c.json(postmarketosInfo, 200);
};
