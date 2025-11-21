import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAppleWatchResponse200Schema } from "./schema";

export const endoflifeAppleWatchRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apple-watch",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAppleWatchResponse200Schema,
        },
      },
      description: "Get the AppleWatch end-of-life information",
    },
  },
});
