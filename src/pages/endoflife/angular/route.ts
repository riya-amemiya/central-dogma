import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetEndoflifeAngularResponse200Schema } from "./schema";

export const endoflifeAngularRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/angular",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetEndoflifeAngularResponse200Schema,
        },
      },
      description: "Get the Angular end-of-life information",
    },
  },
});
