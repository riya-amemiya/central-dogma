import type { endoflifeColdfusionRoute } from "./route";
import type { GetColdfusionResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeColdfusionHandler: RouteHandler<
  typeof endoflifeColdfusionRoute
> = async (c) => {
  const coldfusionInfoResponse = await fetch(
    "https://endoflife.date/api/coldfusion.json",
  );
  const coldfusionInfo = (await coldfusionInfoResponse.json()) as z.infer<
    typeof GetColdfusionResponse200Schema
  >;
  return c.json(coldfusionInfo, 200);
};
