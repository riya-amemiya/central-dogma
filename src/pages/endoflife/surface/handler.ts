import type { endoflifeSurfaceRoute } from "./route";
import type { GetSurfaceResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSurfaceHandler: RouteHandler<
  typeof endoflifeSurfaceRoute
> = async (c) => {
  const surfaceInfoResponse = await fetch(
    "https://endoflife.date/api/surface.json",
  );
  const surfaceInfo = (await surfaceInfoResponse.json()) as z.infer<
    typeof GetSurfaceResponse200Schema
  >;
  return c.json(surfaceInfo, 200);
};
