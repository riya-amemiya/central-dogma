import type { endoflifeRedhatSatelliteRoute } from "./route";
import type { GetRedhatSatelliteResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeRedhatSatelliteHandler: RouteHandler<
  typeof endoflifeRedhatSatelliteRoute
> = async (c) => {
  const redhatSatelliteInfoResponse = await fetch(
    "https://endoflife.date/api/redhat-satellite.json",
  );
  const redhatSatelliteInfo =
    (await redhatSatelliteInfoResponse.json()) as z.infer<
      typeof GetRedhatSatelliteResponse200Schema
    >;
  return c.json(redhatSatelliteInfo, 200);
};
