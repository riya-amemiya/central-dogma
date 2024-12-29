import type { endoflifeDceRoute } from "./route";
import type { GetDceResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDceHandler: RouteHandler<
  typeof endoflifeDceRoute
> = async (c) => {
  const dceInfoResponse = await fetch("https://endoflife.date/api/dce.json");
  const dceInfo = (await dceInfoResponse.json()) as z.infer<
    typeof GetDceResponse200Schema
  >;
  return c.json(dceInfo, 200);
};
