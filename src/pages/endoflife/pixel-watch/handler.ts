import type { endoflifePixelWatchRoute } from "./route";
import type { GetPixelWatchResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePixelWatchHandler: RouteHandler<
  typeof endoflifePixelWatchRoute
> = async (c) => {
  const pixelWatchInfoResponse = await fetch(
    "https://endoflife.date/api/pixel-watch.json",
  );
  const pixelWatchInfo = (await pixelWatchInfoResponse.json()) as z.infer<
    typeof GetPixelWatchResponse200Schema
  >;
  return c.json(pixelWatchInfo, 200);
};
