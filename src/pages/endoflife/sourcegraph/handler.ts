import type { endoflifeSourcegraphRoute } from "./route";
import type { GetSourcegraphResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSourcegraphHandler: RouteHandler<
  typeof endoflifeSourcegraphRoute
> = async (c) => {
  const sourcegraphInfoResponse = await fetch(
    "https://endoflife.date/api/sourcegraph.json",
  );
  const sourcegraphInfo = (await sourcegraphInfoResponse.json()) as z.infer<
    typeof GetSourcegraphResponse200Schema
  >;
  return c.json(sourcegraphInfo, 200);
};
