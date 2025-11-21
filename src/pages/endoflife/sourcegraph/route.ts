import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSourcegraphResponse200Schema } from "./schema";

export const endoflifeSourcegraphRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sourcegraph",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSourcegraphResponse200Schema,
        },
      },
      description: "Get the Sourcegraph end-of-life information",
    },
  },
});
