import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAppleWatchResponse200Schema } from "./schema";

export const endoflifeAppleWatchRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
