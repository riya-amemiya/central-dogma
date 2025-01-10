import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOpnsenseResponse200Schema } from "./schema";

export const endoflifeOpnsenseRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/opnsense",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOpnsenseResponse200Schema,
        },
      },
      description: "Get the Opnsense end-of-life information",
    },
  },
});
