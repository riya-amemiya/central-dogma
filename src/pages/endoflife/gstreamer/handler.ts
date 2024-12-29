import type { endoflifeGstreamerRoute } from "./route";
import type { GetGstreamerResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeGstreamerHandler: RouteHandler<
  typeof endoflifeGstreamerRoute
> = async (c) => {
  const gstreamerInfoResponse = await fetch(
    "https://endoflife.date/api/gstreamer.json",
  );
  const gstreamerInfo = (await gstreamerInfoResponse.json()) as z.infer<
    typeof GetGstreamerResponse200Schema
  >;
  return c.json(gstreamerInfo, 200);
};
