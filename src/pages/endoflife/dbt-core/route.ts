import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDbtCoreResponse200Schema } from "./schema";

export const endoflifeDbtCoreRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
