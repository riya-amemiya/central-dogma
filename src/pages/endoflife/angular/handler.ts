import type { endoflifeAngularRoute } from "./route";
import type { GetEndoflifeAngularResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAngularHandler: RouteHandler<
  typeof endoflifeAngularRoute
> = async (c) => {
  const angularInfoResponse = await fetch(
    "https://endoflife.date/api/angular.json",
  );
  const angularInfo = (await angularInfoResponse.json()) as z.infer<
    typeof GetEndoflifeAngularResponse200Schema
  >;
  return c.json(angularInfo, 200);
};
