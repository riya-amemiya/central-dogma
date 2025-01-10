import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonRdsPostgresqlResponse200Schema } from "./schema";

export const endoflifeAmazonRdsPostgresqlRoute = createRoute({
  tags: ["endoflife"],
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "ms", "s"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-rds-postgresql",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonRdsPostgresqlResponse200Schema,
        },
      },
      description: "Get the AmazonRdsPostgresql end-of-life information",
    },
  },
});
