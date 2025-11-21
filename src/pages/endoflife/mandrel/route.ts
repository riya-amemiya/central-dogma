import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetMandrelResponse200Schema } from "./schema";

export const endoflifeMandrelRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mandrel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMandrelResponse200Schema,
        },
      },
      description: "Get the Mandrel end-of-life information",
    },
  },
});
