import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMemcachedResponse200Schema } from "./schema";

export const endoflifeMemcachedRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/memcached",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMemcachedResponse200Schema,
        },
      },
      description: "Get the Memcached end-of-life information",
    },
  },
});
