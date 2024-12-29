import type { endoflifeWagtailRoute } from "./route";
import type { GetWagtailResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeWagtailHandler: RouteHandler<
  typeof endoflifeWagtailRoute
> = async (c) => {
  const wagtailInfoResponse = await fetch(
    "https://endoflife.date/api/wagtail.json",
  );
  const wagtailInfo = (await wagtailInfoResponse.json()) as z.infer<
    typeof GetWagtailResponse200Schema
  >;
  return c.json(wagtailInfo, 200);
};
