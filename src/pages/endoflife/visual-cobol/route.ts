import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetVisualCobolResponse200Schema } from "./schema";

export const endoflifeVisualCobolRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/visual-cobol",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetVisualCobolResponse200Schema,
        },
      },
      description: "Get the VisualCobol end-of-life information",
    },
  },
});
