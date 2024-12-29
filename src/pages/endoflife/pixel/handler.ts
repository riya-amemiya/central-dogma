import type { endoflifePixelRoute } from "./route";
import type { GetPixelResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePixelHandler: RouteHandler<
  typeof endoflifePixelRoute
> = async (c) => {
  const pixelInfoResponse = await fetch(
    "https://endoflife.date/api/pixel.json",
  );
  const pixelInfo = (await pixelInfoResponse.json()) as z.infer<
    typeof GetPixelResponse200Schema
  >;
  return c.json(pixelInfo, 200);
};
