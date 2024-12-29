import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSpringFrameworkResponse200Schema } from "./schema";

export const endoflifeSpringFrameworkRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/spring-framework",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSpringFrameworkResponse200Schema,
        },
      },
      description: "Get the SpringFramework end-of-life information",
    },
  },
});
