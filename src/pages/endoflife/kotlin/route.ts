import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetKotlinResponse200Schema } from "./schema";

export const endoflifeKotlinRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kotlin",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKotlinResponse200Schema,
        },
      },
      description: "Get the Kotlin end-of-life information",
    },
  },
});
