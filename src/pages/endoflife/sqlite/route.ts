import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetSqliteResponse200Schema } from "./schema";

export const endoflifeSqliteRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
