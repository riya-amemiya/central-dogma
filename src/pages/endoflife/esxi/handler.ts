import type { endoflifeEsxiRoute } from "./route";
import type { GetEsxiResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeEsxiHandler: RouteHandler<
  typeof endoflifeEsxiRoute
> = async (c) => {
  const esxiInfoResponse = await fetch("https://endoflife.date/api/esxi.json");
  const esxiInfo = (await esxiInfoResponse.json()) as z.infer<
    typeof GetEsxiResponse200Schema
  >;
  return c.json(esxiInfo, 200);
};
