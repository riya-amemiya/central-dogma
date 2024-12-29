import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMemcachedResponse200Schema } from "./schema";

export const endoflifeMemcachedRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
