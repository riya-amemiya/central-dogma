import type { endoflifeIosRoute } from "./route";
import type { GetIosResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIosHandler: RouteHandler<
  typeof endoflifeIosRoute
> = async (c) => {
  const iosInfoResponse = await fetch("https://endoflife.date/api/ios.json");
  const iosInfo = (await iosInfoResponse.json()) as z.infer<
    typeof GetIosResponse200Schema
  >;
  return c.json(iosInfo, 200);
};
