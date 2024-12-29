import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheSparkResponse200Schema } from "./schema";

export const endoflifeApacheSparkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache-spark",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheSparkResponse200Schema,
        },
      },
      description: "Get the ApacheSpark end-of-life information",
    },
  },
});
