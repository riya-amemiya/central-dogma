import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetGradleResponse200Schema } from "./schema";

export const endoflifeGradleRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/gradle",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetGradleResponse200Schema,
        },
      },
      description: "Get the Gradle end-of-life information",
    },
  },
});