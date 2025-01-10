import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDrushResponse200Schema } from "./schema";

export const endoflifeDrushRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/drush",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDrushResponse200Schema,
        },
      },
      description: "Get the Drush end-of-life information",
    },
  },
});
