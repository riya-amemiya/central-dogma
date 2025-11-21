import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetDebianResponse200Schema } from "./schema";

export const endoflifeDebianRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/debian",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetDebianResponse200Schema,
        },
      },
      description: "Get the Debian end-of-life information",
    },
  },
});
