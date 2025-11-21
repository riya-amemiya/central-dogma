import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetVarnishResponse200Schema } from "./schema";

export const endoflifeVarnishRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/varnish",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVarnishResponse200Schema,
        },
      },
      description: "Get the Varnish end-of-life information",
    },
  },
});
