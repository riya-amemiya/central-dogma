import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetBazelResponse200Schema } from "./schema";

export const endoflifeBazelRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
