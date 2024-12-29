import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetKindleResponse200Schema } from "./schema";

export const endoflifeKindleRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/kindle",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetKindleResponse200Schema,
        },
      },
      description: "Get the Kindle end-of-life information",
    },
  },
});