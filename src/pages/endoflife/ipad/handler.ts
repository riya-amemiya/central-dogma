import type { endoflifeIpadRoute } from "./route";
import type { GetIpadResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeIpadHandler: RouteHandler<
  typeof endoflifeIpadRoute
> = async (c) => {
  const ipadInfoResponse = await fetch("https://endoflife.date/api/ipad.json");
  const ipadInfo = (await ipadInfoResponse.json()) as z.infer<
    typeof GetIpadResponse200Schema
  >;
  return c.json(ipadInfo, 200);
};
