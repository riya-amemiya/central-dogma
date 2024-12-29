import type { endoflifeVarnishRoute } from "./route";
import type { GetVarnishResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeVarnishHandler: RouteHandler<
  typeof endoflifeVarnishRoute
> = async (c) => {
  const varnishInfoResponse = await fetch(
    "https://endoflife.date/api/varnish.json",
  );
  const varnishInfo = (await varnishInfoResponse.json()) as z.infer<
    typeof GetVarnishResponse200Schema
  >;
  return c.json(varnishInfo, 200);
};
