import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSonarResponse200Schema } from "./schema";

export const endoflifeSonarRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sonar",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSonarResponse200Schema,
        },
      },
      description: "Get the Sonar end-of-life information",
    },
  },
});
