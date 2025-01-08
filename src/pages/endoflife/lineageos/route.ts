import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetLineageosResponse200Schema } from "./schema";

export const endoflifeLineageosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/lineageos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetLineageosResponse200Schema,
        },
      },
      description: "Get the Lineageos end-of-life information",
    },
  },
});
