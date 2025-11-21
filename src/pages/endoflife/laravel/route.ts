import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetLaravelResponse200Schema } from "./schema";

export const endoflifeLaravelRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/laravel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLaravelResponse200Schema,
        },
      },
      description: "Get the Laravel end-of-life information",
    },
  },
});
