import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetAndroidResponse200Schema } from "./schema";

export const endoflifeAndroidRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/android",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAndroidResponse200Schema,
        },
      },
      description: "Get the Android end-of-life information",
    },
  },
});
