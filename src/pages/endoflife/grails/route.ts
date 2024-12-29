import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGrailsResponse200Schema } from "./schema";

export const endoflifeGrailsRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/grails",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGrailsResponse200Schema,
        },
      },
      description: "Get the Grails end-of-life information",
    },
  },
});
