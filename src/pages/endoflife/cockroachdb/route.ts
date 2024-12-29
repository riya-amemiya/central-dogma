import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetCockroachdbResponse200Schema } from "./schema";

export const endoflifeCockroachdbRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/cockroachdb",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetCockroachdbResponse200Schema,
        },
      },
      description: "Get the Cockroachdb end-of-life information",
    },
  },
});
