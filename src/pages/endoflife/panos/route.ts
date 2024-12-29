import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetPanosResponse200Schema } from "./schema";

export const endoflifePanosRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/panos",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPanosResponse200Schema,
        },
      },
      description: "Get the Panos end-of-life information",
    },
  },
});
