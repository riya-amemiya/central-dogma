import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetOracleLinuxResponse200Schema } from "./schema";

export const endoflifeOracleLinuxRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oracle-linux",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOracleLinuxResponse200Schema,
        },
      },
      description: "Get the OracleLinux end-of-life information",
    },
  },
});
