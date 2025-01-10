import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMediawikiResponse200Schema } from "./schema";

export const endoflifeMediawikiRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mediawiki",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMediawikiResponse200Schema,
        },
      },
      description: "Get the Mediawiki end-of-life information",
    },
  },
});
