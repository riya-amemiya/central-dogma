import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCentreonResponse200Schema } from "./schema";

export const endoflifeCentreonRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/centreon",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCentreonResponse200Schema,
        },
      },
      description: "Get the Centreon end-of-life information",
    },
  },
});
