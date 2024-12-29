import { createRoute } from "@hono/zod-openapi";
import { cacheMiddleware } from "@utils/cacheMiddleware";
import { convertTime, OneDayMs } from "umt/module";

import { GetAmazonRdsMysqlResponse200Schema } from "./schema";

export const endoflifeAmazonRdsMysqlRoute = createRoute({
  middleware: cacheMiddleware({
    maxAge: convertTime(OneDayMs, "milliseconds", "seconds"),
    directives: ["public"],
  }),
  method: "get",
  path: "/amazon-rds-mysql",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: GetAmazonRdsMysqlResponse200Schema,
        },
      },
      description: "Get the AmazonRdsMysql end-of-life information",
    },
  },
});
