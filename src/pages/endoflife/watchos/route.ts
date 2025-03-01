import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetWatchosResponse200Schema } from "./schema";

export const endoflifeWatchosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/watchos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetWatchosResponse200Schema,
        },
      },
      description: "Get the Watchos end-of-life information",
    },
  },
});
