import type { endoflifeLog4jRoute as endoflifeLog4indexRoute } from "./route";
import type { GetLog4jResponse200Schema as GetLog4indexResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

// eslint-disable-next-line unicorn/prevent-abbreviations
export const endoflifeLog4jHandler: RouteHandler<
  typeof endoflifeLog4indexRoute
> = async (c) => {
  const log4indexInfoResponse = await fetch(
    "https://endoflife.date/api/log4j.json",
  );
  const log4indexInfo = (await log4indexInfoResponse.json()) as z.infer<
    typeof GetLog4indexResponse200Schema
  >;
  return c.json(log4indexInfo, 200);
};
