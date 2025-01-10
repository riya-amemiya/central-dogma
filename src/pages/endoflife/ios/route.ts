import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIosResponse200Schema } from "./schema";

export const endoflifeIosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ios",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIosResponse200Schema,
        },
      },
      description: "Get the Ios end-of-life information",
    },
  },
});
