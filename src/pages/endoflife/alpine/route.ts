import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAlpineResponse200Schema } from "./schema";

export const endoflifeAlpineRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/alpine",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAlpineResponse200Schema,
        },
      },
      description: "Get the Alpine end-of-life information",
    },
  },
});
