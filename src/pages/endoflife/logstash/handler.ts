import type { endoflifeLogstashRoute } from "./route";
import type { GetLogstashResponse200Schema } from "./schema";
import type { RouteHandler } from "@hono/zod-openapi";
import type { z } from "@hono/zod-openapi";

export const endoflifeLogstashHandler: RouteHandler<
  typeof endoflifeLogstashRoute
> = async (c) => {
  const logstashInfoResponse = await fetch(
    "https://endoflife.date/api/logstash.json",
  );
  const logstashInfo = (await logstashInfoResponse.json()) as z.infer<
    typeof GetLogstashResponse200Schema
  >;
  return c.json(logstashInfo, 200);
};
