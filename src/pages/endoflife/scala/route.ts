import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetScalaResponse200Schema } from "./schema";

export const endoflifeScalaRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/scala",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetScalaResponse200Schema,
        },
      },
      description: "Get the Scala end-of-life information",
    },
  },
});
