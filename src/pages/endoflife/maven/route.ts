import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMavenResponse200Schema } from "./schema";

export const endoflifeMavenRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/maven",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMavenResponse200Schema,
        },
      },
      description: "Get the Maven end-of-life information",
    },
  },
});
