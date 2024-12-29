import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKotlinResponse200Schema } from "./schema";

export const endoflifeKotlinRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
