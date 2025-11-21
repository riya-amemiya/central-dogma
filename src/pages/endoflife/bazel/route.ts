import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetBazelResponse200Schema } from "./schema";

export const endoflifeBazelRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/bazel",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetBazelResponse200Schema,
        },
      },
      description: "Get the Bazel end-of-life information",
    },
  },
});
