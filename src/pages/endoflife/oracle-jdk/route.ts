import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetOracleJdkResponse200Schema } from "./schema";

export const endoflifeOracleJdkRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
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
