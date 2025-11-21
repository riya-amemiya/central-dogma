import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetSqliteResponse200Schema } from "./schema";

export const endoflifeSqliteRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/sqlite",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetSqliteResponse200Schema,
        },
      },
      description: "Get the Sqlite end-of-life information",
    },
  },
});
