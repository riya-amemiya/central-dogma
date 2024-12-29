import type { endoflifeEximRoute } from "./route";
import type { GetEximResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEximHandler: RouteHandler<
  typeof endoflifeEximRoute
> = async (c) => {
  const eximInfoResponse = await fetch("https://endoflife.date/api/exim.json");
  const eximInfo = (await eximInfoResponse.json()) as z.infer<
    typeof GetEximResponse200Schema
  >;
  return c.json(eximInfo, 200);
};
