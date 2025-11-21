import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSlesResponse200Schema } from "./schema";

export const endoflifeSlesRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sles",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSlesResponse200Schema,
        },
      },
      description: "Get the Sles end-of-life information",
    },
  },
});
