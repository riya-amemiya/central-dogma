import type { endoflifeAntixRoute } from "./route";
import type { GetAntixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAntixHandler: RouteHandler<
  typeof endoflifeAntixRoute
> = async (c) => {
  const antixInfoResponse = await fetch(
    "https://endoflife.date/api/antix.json",
  );
  const antixInfo = (await antixInfoResponse.json()) as z.infer<
    typeof GetAntixResponse200Schema
  >;
  return c.json(antixInfo, 200);
};
