import type { endoflifeDrushRoute } from "./route";
import type { GetDrushResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDrushHandler: RouteHandler<
  typeof endoflifeDrushRoute
> = async (c) => {
  const drushInfoResponse = await fetch(
    "https://endoflife.date/api/drush.json",
  );
  const drushInfo = (await drushInfoResponse.json()) as z.infer<
    typeof GetDrushResponse200Schema
  >;
  return c.json(drushInfo, 200);
};
