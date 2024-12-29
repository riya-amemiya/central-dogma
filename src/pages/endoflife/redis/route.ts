import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedisResponse200Schema } from "./schema";

export const endoflifeRedisRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/redis",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedisResponse200Schema,
        },
      },
      description: "Get the Redis end-of-life information",
    },
  },
});
