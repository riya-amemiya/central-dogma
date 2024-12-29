import type { endoflifeVisionosRoute } from "./route";
import type { GetVisionosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVisionosHandler: RouteHandler<
  typeof endoflifeVisionosRoute
> = async (c) => {
  const visionosInfoResponse = await fetch(
    "https://endoflife.date/api/visionos.json",
  );
  const visionosInfo = (await visionosInfoResponse.json()) as z.infer<
    typeof GetVisionosResponse200Schema
  >;
  return c.json(visionosInfo, 200);
};
