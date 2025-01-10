import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedisResponse200Schema } from "./schema";

export const endoflifeRedisRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
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
