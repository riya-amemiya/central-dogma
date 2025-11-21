import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt";

import { GetOracleJdkResponse200Schema } from "./schema";

export const endoflifeOracleJdkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/oracle-jdk",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetOracleJdkResponse200Schema,
        },
      },
      description: "Get the OracleJdk end-of-life information",
    },
  },
});
