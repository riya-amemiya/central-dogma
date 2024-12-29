import type { endoflifeDevuanRoute } from "./route";
import type { GetDevuanResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDevuanHandler: RouteHandler<
  typeof endoflifeDevuanRoute
> = async (c) => {
  const devuanInfoResponse = await fetch(
    "https://endoflife.date/api/devuan.json",
  );
  const devuanInfo = (await devuanInfoResponse.json()) as z.infer<
    typeof GetDevuanResponse200Schema
  >;
  return c.json(devuanInfo, 200);
};
