import type { endoflifeCentreonRoute } from "./route";
import type { GetCentreonResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCentreonHandler: RouteHandler<
  typeof endoflifeCentreonRoute
> = async (c) => {
  const centreonInfoResponse = await fetch(
    "https://endoflife.date/api/centreon.json",
  );
  const centreonInfo = (await centreonInfoResponse.json()) as z.infer<
    typeof GetCentreonResponse200Schema
  >;
  return c.json(centreonInfo, 200);
};
