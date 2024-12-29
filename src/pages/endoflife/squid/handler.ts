import type { endoflifeSquidRoute } from "./route";
import type { GetSquidResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeSquidHandler: RouteHandler<
  typeof endoflifeSquidRoute
> = async (c) => {
  const squidInfoResponse = await fetch(
    "https://endoflife.date/api/squid.json",
  );
  const squidInfo = (await squidInfoResponse.json()) as z.infer<
    typeof GetSquidResponse200Schema
  >;
  return c.json(squidInfo, 200);
};
