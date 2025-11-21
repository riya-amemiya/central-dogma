import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetTailsResponse200Schema } from "./schema";

export const endoflifeTailsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/tails",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTailsResponse200Schema,
        },
      },
      description: "Get the Tails end-of-life information",
    },
  },
});
