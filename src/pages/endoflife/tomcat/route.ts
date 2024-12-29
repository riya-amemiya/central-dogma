import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetTomcatResponse200Schema } from "./schema";

export const endoflifeTomcatRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
