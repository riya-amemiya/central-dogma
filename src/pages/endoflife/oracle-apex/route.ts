import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOracleApexResponse200Schema } from "./schema";

export const endoflifeOracleApexRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oracle-apex",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOracleApexResponse200Schema,
        },
      },
      description: "Get the OracleApex end-of-life information",
    },
  },
});
