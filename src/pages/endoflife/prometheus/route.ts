import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPrometheusResponse200Schema } from "./schema";

export const endoflifePrometheusRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/prometheus",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPrometheusResponse200Schema,
        },
      },
      description: "Get the Prometheus end-of-life information",
    },
  },
});
