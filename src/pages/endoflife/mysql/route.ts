import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetMysqlResponse200Schema } from "./schema";

export const endoflifeMysqlRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/mysql",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetMysqlResponse200Schema,
        },
      },
      description: "Get the Mysql end-of-life information",
    },
  },
});
