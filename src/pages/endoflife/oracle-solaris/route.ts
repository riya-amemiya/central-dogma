import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetOracleSolarisResponse200Schema } from "./schema";

export const endoflifeOracleSolarisRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oracle-solaris",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOracleSolarisResponse200Schema,
        },
      },
      description: "Get the OracleSolaris end-of-life information",
    },
  },
});
