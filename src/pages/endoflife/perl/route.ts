import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetPerlResponse200Schema } from "./schema";

export const endoflifePerlRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/perl",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPerlResponse200Schema,
        },
      },
      description: "Get the Perl end-of-life information",
    },
  },
});
