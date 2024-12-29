import type { endoflifeAppleWatchRoute } from "./route";
import type { GetAppleWatchResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeAppleWatchHandler: RouteHandler<
  typeof endoflifeAppleWatchRoute
> = async (c) => {
  const appleWatchInfoResponse = await fetch(
    "https://endoflife.date/api/apple-watch.json",
  );
  const appleWatchInfo = (await appleWatchInfoResponse.json()) as z.infer<
    typeof GetAppleWatchResponse200Schema
  >;
  return c.json(appleWatchInfo, 200);
};
