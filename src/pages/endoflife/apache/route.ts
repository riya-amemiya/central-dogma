import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetApacheResponse200Schema } from "./schema";

export const endoflifeApacheRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/apache",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetApacheResponse200Schema,
        },
      },
      description: "Get the Apache end-of-life information",
    },
  },
});
