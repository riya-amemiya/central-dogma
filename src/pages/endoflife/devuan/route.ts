import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetDevuanResponse200Schema } from "./schema";

export const endoflifeDevuanRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/devuan",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDevuanResponse200Schema,
        },
      },
      description: "Get the Devuan end-of-life information",
    },
  },
});
