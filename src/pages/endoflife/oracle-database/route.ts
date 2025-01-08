import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOracleDatabaseResponse200Schema } from "./schema";

export const endoflifeOracleDatabaseRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oracle-database",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOracleDatabaseResponse200Schema,
        },
      },
      description: "Get the OracleDatabase end-of-life information",
    },
  },
});
