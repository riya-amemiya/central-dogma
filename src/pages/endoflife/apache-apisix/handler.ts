import type { endoflifeApacheApisixRoute } from "./route";
import type { GetApacheApisixResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheApisixHandler: RouteHandler<
  typeof endoflifeApacheApisixRoute
> = async (c) => {
  const apacheApisixInfoResponse = await fetch(
    "https://endoflife.date/api/apache-apisix.json",
  );
  const apacheApisixInfo = (await apacheApisixInfoResponse.json()) as z.infer<
    typeof GetApacheApisixResponse200Schema
  >;
  return c.json(apacheApisixInfo, 200);
};
