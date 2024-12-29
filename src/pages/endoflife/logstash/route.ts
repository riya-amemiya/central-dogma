import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLogstashResponse200Schema } from "./schema";

export const endoflifeLogstashRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/logstash",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLogstashResponse200Schema,
        },
      },
      description: "Get the Logstash end-of-life information",
    },
  },
});
