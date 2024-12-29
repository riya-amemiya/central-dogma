import type { endoflifeMemcachedRoute } from "./route";
import type { GetMemcachedResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeMemcachedHandler: RouteHandler<
  typeof endoflifeMemcachedRoute
> = async (c) => {
  const memcachedInfoResponse = await fetch(
    "https://endoflife.date/api/memcached.json",
  );
  const memcachedInfo = (await memcachedInfoResponse.json()) as z.infer<
    typeof GetMemcachedResponse200Schema
  >;
  return c.json(memcachedInfo, 200);
};
