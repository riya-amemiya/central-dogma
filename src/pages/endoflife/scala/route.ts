import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetScalaResponse200Schema } from "./schema";

export const endoflifeScalaRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
