import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOracleApexResponse200Schema } from "./schema";

export const endoflifeOracleApexRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
