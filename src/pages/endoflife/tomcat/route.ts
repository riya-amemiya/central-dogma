import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetTomcatResponse200Schema } from "./schema";

export const endoflifeTomcatRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/tomcat",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetTomcatResponse200Schema,
        },
      },
      description: "Get the Tomcat end-of-life information",
    },
  },
});
