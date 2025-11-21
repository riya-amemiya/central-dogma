import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetDbtCoreResponse200Schema } from "./schema";

export const endoflifeDbtCoreRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/dbt-core",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDbtCoreResponse200Schema,
        },
      },
      description: "Get the DbtCore end-of-life information",
    },
  },
});
