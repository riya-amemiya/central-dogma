import type { endoflifeWatchosRoute } from "./route";
import type { GetWatchosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWatchosHandler: RouteHandler<
  typeof endoflifeWatchosRoute
> = async (c) => {
  const watchosInfoResponse = await fetch(
    "https://endoflife.date/api/watchos.json",
  );
  const watchosInfo = (await watchosInfoResponse.json()) as z.infer<
    typeof GetWatchosResponse200Schema
  >;
  return c.json(watchosInfo, 200);
};
