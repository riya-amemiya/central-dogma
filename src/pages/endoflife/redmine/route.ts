import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetRedmineResponse200Schema } from "./schema";

export const endoflifeRedmineRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/redmine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetRedmineResponse200Schema,
        },
      },
      description: "Get the Redmine end-of-life information",
    },
  },
});
