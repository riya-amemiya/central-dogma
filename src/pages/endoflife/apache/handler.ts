import type { endoflifeApacheRoute } from "./route";
import type { GetApacheResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeApacheHandler: RouteHandler<
  typeof endoflifeApacheRoute
> = async (c) => {
  const apacheInfoResponse = await fetch(
    "https://endoflife.date/api/apache.json",
  );
  const apacheInfo = (await apacheInfoResponse.json()) as z.infer<
    typeof GetApacheResponse200Schema
  >;
  return c.json(apacheInfo, 200);
};
