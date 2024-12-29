import type { endoflifeRailsRoute } from "./route";
import type { GetRailsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRailsHandler: RouteHandler<
  typeof endoflifeRailsRoute
> = async (c) => {
  const railsInfoResponse = await fetch(
    "https://endoflife.date/api/rails.json",
  );
  const railsInfo = (await railsInfoResponse.json()) as z.infer<
    typeof GetRailsResponse200Schema
  >;
  return c.json(railsInfo, 200);
};
