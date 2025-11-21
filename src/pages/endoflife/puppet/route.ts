import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetPuppetResponse200Schema } from "./schema";

export const endoflifePuppetRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/puppet",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetPuppetResponse200Schema,
        },
      },
      description: "Get the Puppet end-of-life information",
    },
  },
});
