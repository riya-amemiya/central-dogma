import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetVueResponse200Schema } from "./schema";

export const endoflifeVueRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/vue",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVueResponse200Schema,
        },
      },
      description: "Get the Vue end-of-life information",
    },
  },
});
