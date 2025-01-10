import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetIbmAixResponse200Schema } from "./schema";

export const endoflifeIbmAixRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/ibm-aix",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetIbmAixResponse200Schema,
        },
      },
      description: "Get the IbmAix end-of-life information",
    },
  },
});
