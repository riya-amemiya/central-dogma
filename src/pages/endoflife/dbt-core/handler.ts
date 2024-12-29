import type { endoflifeDbtCoreRoute } from "./route";
import type { GetDbtCoreResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeDbtCoreHandler: RouteHandler<
  typeof endoflifeDbtCoreRoute
> = async (c) => {
  const dbtCoreInfoResponse = await fetch(
    "https://endoflife.date/api/dbt-core.json",
  );
  const dbtCoreInfo = (await dbtCoreInfoResponse.json()) as z.infer<
    typeof GetDbtCoreResponse200Schema
  >;
  return c.json(dbtCoreInfo, 200);
};
