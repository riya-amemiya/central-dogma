import type { endoflifeAngularjsRoute } from "./route";
import type { GetAngularjsResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAngularjsHandler: RouteHandler<
  typeof endoflifeAngularjsRoute
> = async (c) => {
  const angularjsInfoResponse = await fetch(
    "https://endoflife.date/api/angularjs.json",
  );
  const angularjsInfo = (await angularjsInfoResponse.json()) as z.infer<
    typeof GetAngularjsResponse200Schema
  >;
  return c.json(angularjsInfo, 200);
};
