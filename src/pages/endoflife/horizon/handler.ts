import type { endoflifeHorizonRoute } from "./route";
import type { GetHorizonResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeHorizonHandler: RouteHandler<
  typeof endoflifeHorizonRoute
> = async (c) => {
  const horizonInfoResponse = await fetch(
    "https://endoflife.date/api/horizon.json",
  );
  const horizonInfo = (await horizonInfoResponse.json()) as z.infer<
    typeof GetHorizonResponse200Schema
  >;
  return c.json(horizonInfo, 200);
};
