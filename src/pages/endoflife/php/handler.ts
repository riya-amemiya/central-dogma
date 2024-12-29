import type { endoflifePhpRoute } from "./route";
import type { GetPhpResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifePhpHandler: RouteHandler<
  typeof endoflifePhpRoute
> = async (c) => {
  const phpInfoResponse = await fetch("https://endoflife.date/api/php.json");
  const phpInfo = (await phpInfoResponse.json()) as z.infer<
    typeof GetPhpResponse200Schema
  >;
  return c.json(phpInfo, 200);
};
