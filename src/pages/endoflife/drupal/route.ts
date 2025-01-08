import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDrupalResponse200Schema } from "./schema";

export const endoflifeDrupalRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/drupal",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDrupalResponse200Schema,
        },
      },
      description: "Get the Drupal end-of-life information",
    },
  },
});
