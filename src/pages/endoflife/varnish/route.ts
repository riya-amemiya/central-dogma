import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVarnishResponse200Schema } from "./schema";

export const endoflifeVarnishRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
