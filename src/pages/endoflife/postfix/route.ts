import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPostfixResponse200Schema } from "./schema";

export const endoflifePostfixRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/postfix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPostfixResponse200Schema,
        },
      },
      description: "Get the Postfix end-of-life information",
    },
  },
});
