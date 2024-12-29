import type { endoflifeNeosRoute } from "./route";
import type { GetNeosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeNeosHandler: RouteHandler<
  typeof endoflifeNeosRoute
> = async (c) => {
  const neosInfoResponse = await fetch("https://endoflife.date/api/neos.json");
  const neosInfo = (await neosInfoResponse.json()) as z.infer<
    typeof GetNeosResponse200Schema
  >;
  return c.json(neosInfo, 200);
};
