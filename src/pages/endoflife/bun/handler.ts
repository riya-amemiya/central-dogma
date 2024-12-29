import type { endoflifeBunRoute } from "./route";
import type { GetBunResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeBunHandler: RouteHandler<
  typeof endoflifeBunRoute
> = async (c) => {
  const bunInfoResponse = await fetch("https://endoflife.date/api/bun.json");
  const bunInfo = (await bunInfoResponse.json()) as z.infer<
    typeof GetBunResponse200Schema
  >;
  return c.json(bunInfo, 200);
};
