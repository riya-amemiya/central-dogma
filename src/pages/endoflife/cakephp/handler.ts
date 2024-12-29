import type { endoflifeCakephpRoute } from "./route";
import type { GetCakephpResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeCakephpHandler: RouteHandler<
  typeof endoflifeCakephpRoute
> = async (c) => {
  const cakephpInfoResponse = await fetch(
    "https://endoflife.date/api/cakephp.json",
  );
  const cakephpInfo = (await cakephpInfoResponse.json()) as z.infer<
    typeof GetCakephpResponse200Schema
  >;
  return c.json(cakephpInfo, 200);
};
